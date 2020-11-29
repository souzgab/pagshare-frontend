import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField'
import * as copy from 'copy-to-clipboard';
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
  const [open, setOpen] = useState(false);
  const [urlShare, setUrlShare] = useState("");
  const [result, setResult] = useState(false)
  const [disable, setDisable] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault();
    setResult(true)
    setUrlShare(props.idLobby)
    const res = handleObj();
    copy(`Message: ${res.message}, ID: ${props.obj.id}`)
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setUrlShare("")
    setOpen(false);
    setDisable(false)
  };

  const handleObj = () =>{
    const message = {
      message: "Você foi convidado para participar de uma lobby de pagamentos, utilize o id para entrar!",
      idLobby: props.id
    }
    return message;
  }

  function share(){
    if (navigator.share !== undefined) {
      navigator.share({
        title: 'Payshare, Compartilhe!',
        text: 'Você foi convidado para fazer parte do futuro em pagamentos compartilhados',
        url: 'https://www.google.com/',
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    }
  }
  

  return (
    <div>
      {/* TODO: COLOCAR AQUI O COMPONENTE DO LOBBY PAGE QUE PUXA O MODAL */}
      <Button onClick={handleOpen}
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
            <h2 style={{ color: '#fff', textAlign: "center" }}>Compartilhe com seu amigos</h2>
            <form className={classes.root} noValidate onSubmit={handleSubmit} >
              <TextField
                style={{ margin: '10px' }}
                variant='outlined'
                required
                fullWidth
                name="lobbyshare"
                label="Id Para acesso da Lobby"
                id="lobbyshare"
                disabled
                value="Clique no botão abaixo para copiar o texto de compartilhamento"
                InputProps={{ style: { color: '#fff' } }}
                InputLabelProps={{
                  style: { shrink: true, color: '#fff' },
                }}
              />
              <Button
                hidden = {disable ? true : false}
                type="submit"
                variant="success"
                id="buttonCopy"
                color="secondary"
                onClick={share}
                style={{
                  color: "white",
                  padding: '10px',
                  fontFamily: "Roboto",
                  margin: '10px',
                  width : '100%'
                }}
              >
               {urlShare ? "Copiado!" : "Copiar"}
                  </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}