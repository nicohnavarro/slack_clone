import React from 'react';
import './Details.css';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import db from '../../../firebase';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Details = ({roomId}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleConfirm = () => {
        db.collection('rooms').doc(roomId).delete().then(function() {
            console.log("Document successfully deleted!");
            setOpen(false);
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      };
  
    return (
      <div>
          <div className='details__icons'>
            <InfoOutlinedIcon />
            <DeleteIcon onClick={handleClickOpen}/> 
          </div>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"You want to remove this channel?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              You will lost all the messages ...
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="red">
              ❌
            </Button>
            <Button onClick={handleConfirm} color="green">
              ✔
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

export default Details
