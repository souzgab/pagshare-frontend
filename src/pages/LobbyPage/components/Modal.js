import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Axios from 'axios';

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
// TODO: FAZER A REQUISIÇÂO PARA CRIIAR LOBBY (COMO PEGAR O TOKEN DO LOCALSTORAGE)
async function createLobby(lobbyDesc, orderDesc, orderAmount) {

  const url = "https://paysharedev.herokuapp.com/v1/payshare/lobby/saveLobby"

  const tokenStorage = 'token'
  const token = localStorage.getItem(tokenStorage)
  const amountTotal = 0

  if(lobbyDesc && orderDesc && orderAmount && amountTotal && token) {
    const data = await Axios.post(url, {lobbyDesc, orderDesc, orderAmount, amountTotal, token})

  }
}

async function onSubmit(evento) {
  evento.preventDefault();

}


export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* TODO: COLOCAR AQUI O COMPONENTE DO LOBBY PAGE QUE PUXA O MODAL */}
      <Paper className={classes.paper2} onClick={handleOpen}>
        {props.text}
      </Paper>

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
            <form className={classes.root} noValidate onSubmit={onSubmit}>
              <TextField
              style={{margin: '10px'}}
                variant='outlined'
                required
                fullWidth
                name="lobby_desc"
                label="Descrição"
                id="lobby_desc"
                InputProps={{ style: { color: '#fff' } }}
                InputLabelProps={{
                  style: { shrink: true, color: '#fff' },
                }}
              />
              <TextField
              variant='outlined'
              style={{margin: '10px'}}
                required
                fullWidth
                name="order_desc"
                label="Descrição do Pedido"
                id="order_desc"
                InputProps={{ style: { color: '#fff' } }}
                InputLabelProps={{
                  style: { shrink: true, color: '#fff' },
                }}
              />
              <label id="dateNow" hidden>{new Date().toJSON().slice(0, 10).replace(/-/g, '/')}</label>
              <TextField
              variant='outlined'
              style={{margin: '10px'}}
                required
                fullWidth
                name="order_amount"
                label="Valor do Pedido"
                id="order_amount"
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