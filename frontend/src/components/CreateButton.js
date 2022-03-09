// #############################################################################
// ################################## Imports ##################################
// #############################################################################

// node modules
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

// local imports
import CreateView from './CreateView';


// #############################################################################
// ################################ Main Export ################################
// #############################################################################

export default function CreateButton(props) {

  // grab props
  const {createRecipe} = props;

  // set state variables
  const [open, setOpen] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  // handles opening dialog on button click
  const handleClickOpen = () => {
    setOpen(true);
  };

  // handles closing dialog
  const handleClose = () => {
    setOpen(false);
  };

  // confirm recipe creation
  const confirmCreation = () => {
    setConfirm(true);
    setOpen(false);
  }

  // close confirmation alert
  const closeConfirm = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setConfirm(false);
  }
  

  // render component
  return (
    <div>
      <Button disableFocusRipple variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Custom Recipe
      </Button>
      {/* Actual Full-Screen Create Recipe Dialog */}
      <CreateView
        open = {open}
        handleClose = {handleClose}
        createRecipe = {createRecipe}
        confirmCreation = {confirmCreation}
      />
      <Snackbar
        open={confirm}
        // anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
        autoHideDuration={6000}
        onClose={closeConfirm}
      >
        <Alert onClose={closeConfirm} severity="success" elevation={6} variant="filled">
          Recipe Successfully Created!
        </Alert>
      </Snackbar>
    </div>
  );
}