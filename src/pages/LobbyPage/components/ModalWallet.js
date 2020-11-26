import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#2d2d2d',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paper2: {
    padding: '5vh',
    textAlign: 'center',
    backgroundColor: "primary"
  }
}));


export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [urlPayment, setUrlPayment] = useState("");
  const [result, setResult] = useState(false)
  const [disable, setDisable] = useState(false)
  //inicializa o formData com os valores default
  const [formData, setFormData] = useState(initialState);

  var initialState = () => {
    return {
      amount: '',
      paymentUrl: ''
    };
  }

  // ele vai pegar a ultimo evento dos inputs e seta para o formDate assim alterando o estado dele
  const onChange = (evento) => {
    const { value, name } = evento.target;
    console.log(value)
    setFormData({
      ...formData,
      [name]: value
    })

  }

  //handleSubmit é responsável pela chamada do endpoint criação de lobby
  async function handleSubmit(event) {
    event.preventDefault();
    setResult(true)
    const { userAmount } = formData
    const amount = parseFloat(userAmount)
    const URL = `https://paysharedev.herokuapp.com/v1/payshare/transaction/wallet/${localStorage.getItem('id')}/${amount}`

    var data = {}
    //setando auth bearer
    const config = {
      headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
    };

    try {
      await axios.post(URL, data, config).then((result) => {
        if (result.status == 200) {
          setResult(false)
          setDisable(true)
          setUrlPayment(result.data.body.initPoint)
        }
      }).catch((err) => {
        console.log(err)
      })
    } catch (e) {
      console.log(e)
    }
  }

  const onResultPayment = (urlPayment) => {
    if (urlPayment == "") {
      return true
    }
    return false
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setUrlPayment("")
    setOpen(false);
    setDisable(false)
  };


  return (
    <div>
      {/* TODO: COLOCAR AQUI O COMPONENTE DO LOBBY PAGE QUE PUXA O MODAL */}
      <Button onClick={handleOpen}
        className = "text-center mt-4"
        size="sm"
        variant="success"
        style={{
          fontFamily: 'roboto', 
          fontSize: '12px'
        }}>
        {props.texto}
      </Button>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 style={{ color: '#fff', textAlign: "center" }}>Colocando dinheiro na Wallet</h2>
            <form className={classes.root} noValidate onSubmit={handleSubmit} >
              <TextField
                style={{ margin: '10px' }}
                variant='outlined'
                required
                fullWidth
                name="userAmount"
                onChange={onChange}
                label="Valor"
                id="user_amount"
                // onChange={onChange}
                InputProps={{ style: { color: '#fff' } }}
                InputLabelProps={{
                  style: { shrink: true, color: '#fff' },
                }}
              />
              <TextField
                style={{ margin: '10px' , fontSize:'15px' }}
                variant='outlined'
                required
                hidden={onResultPayment(urlPayment)}
                fullWidth
                name="paymentUrl"
                onChange = {onChange}
                label='Site para pagamento'
                value={urlPayment}
                disabled
                InputProps={{ style: { color: '#fff' } }}
                InputLabelProps={{
                  style: { shrink: true, color: '#fff' },
                }}
              />
              <Button
                hidden = {disable ? true : false}
                type="submit"
                variant="success"
                color="secondary"
                style={{
                  color: "white",
                  padding: '10px',
                  fontFamily: "Roboto",
                  margin: '10px',
                  width : '100%'
                }}
              >
                {result ? <CircularProgress/> : 'Inserir'}
                  </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}