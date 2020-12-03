import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
  // const [values, setValues] = useState(initialState);

  //inicializa o formData com os valores default
  const [formData, setFormData] = useState(initialState);

  var initialState = () =>{
    return {
      lobbyDescription:'',
      orderDescription:'',
      amount:'',
    };
  }
  const history = useHistory();
  // ele vai pegar a ultimo evento dos inputs e seta para o formDate assim alterando o estado dele
  const onChange = (evento) => {
    const { value, name } = evento.target;
    setFormData({
      ...formData,
      [name]: value
    })

  }

  //handleSubmit é responsável pela chamada do endpoint criação de lobby
  async function handleSubmit(event) {
    event.preventDefault();
  
    const { lobbyDescription, orderDescription, amountTotal } = formData
    const URL = `https://paysharedev.herokuapp.com/v1/payshare/lobby/saveLobby/${localStorage.getItem('id')}`
    const amount = parseFloat(formData.amount)
    const data = {
      lobbyDescription,
      orderDescription,
      amount,
      amountTotal:0
    };

    //setando auth bearer
    const config = {
      headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
    };
  
    try {
      await axios.post(URL, data, config).then((result) => {
        if(result.status === 200){
          history.push("/pagamento");
        }
      }).catch((err) => {
        console.log(err)
      })
    } catch (e) {
      console.log(e)
    }
  }


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* TODO: COLOCAR AQUI O COMPONENTE DO LOBBY PAGE QUE PUXA O MODAL */}
      <Button onClick={handleOpen} style={{ backgroundColor: 'transparent', color: '#1CDC6E', fontSize: '14px', fontFamily: 'roboto', border: '2px dashed #1CDC6E', boxSizing: 'border-box' }}>
        Você não possuí nenhuma lobby ativa clique para criar
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
            <h2 style={{ color: '#fff', textAlign: "center" }}>Criação Lobby</h2>
            <form className={classes.root} noValidate onSubmit={handleSubmit} >
              <TextField
                style={{ margin: '10px' }}
                variant='outlined'
                required
                fullWidth
                name="lobbyDescription"
                onChange={onChange}
                label="Descrição"
                id="lobby_desc"
                // onChange={onChange}
                InputProps={{ style: { color: '#fff' } }}
                InputLabelProps={{
                  style: { shrink: true, color: '#fff' },
                }}
              />
              <TextField
                variant='outlined'
                style={{ margin: '10px' }}
                required
                fullWidth
                name="orderDescription"
                label="Descrição do pedido"
                onChange={onChange}
                id="order_desc"
                // onChange={onChange}
                InputProps={{ style: { color: '#fff' } }}
                InputLabelProps={{
                  style: { shrink: true, color: '#fff' },
                }}
              />
              <TextField
                variant='outlined'
                style={{ margin: '10px' }}
                required
                fullWidth
                name="amount"
                label="Valor da lobby"
                onChange={onChange}
                // onChange={onChange}
                InputProps={{ style: { color: '#fff' } }}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                style={{
                  color: "white",
                  padding: '10px',
                  margin: '10px'
                }}
              >
                Criar
                  </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}