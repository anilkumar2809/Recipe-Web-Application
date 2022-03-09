// #############################################################################
// ################################## Imports ##################################
// #############################################################################

// node modules
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


// #############################################################################
// ################################ Main Export ################################
// #############################################################################

export default function DeleteView(props) {

  // grab props
  const {
    open,
    data,
    handleClose,
    deleteRecipe,
    confirmDelete,
  } = props;

  // styles
  const classes = useStyles();

  // handles submitting given url (just closes dialog at the moment)
  const handleConfirm = () => {
    const promise = deleteRecipe(data.rID);
    promise.then(confirmDelete);
  }

  // renders error button
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Delete Recipe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {"You are attempting to permanently delete the recipe: "}<b>{data.rName}</b>{". Please hit confirm to delete the recipe or cancel to exit."}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
    );
}

// #############################################################################
// ################################## Styles ###################################
// #############################################################################

const useStyles = makeStyles((theme) => ({
}));