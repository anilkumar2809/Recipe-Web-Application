// #############################################################################
// ################################## Imports ##################################
// #############################################################################

// node modules
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';

// local imports
import ErrorButton from './ErrorButton';

// #############################################################################
// ################################ Main Export ################################
// #############################################################################

export default function ExtractButton(props) {

  // get props
  const {extractRecipe} = props;

  // set state variables
  const [open, setOpen] = React.useState(false);
  const [url, setURL] = React.useState(null);
  const [openError, setOpenError] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  // use effect to clear data when component opened or closed
  React.useEffect(() => {
    setOpenError(false);
    setURL(null);
  },[open]);

  // handles opening dialog on button click
  const handleClickOpen = () => {
    setOpen(true);
  };

  // handles closing dialog
  const handleClose = () => {
    setOpen(false);
  };

  // handle change to form
  const handleChange = (event) => {
    setURL(event.target.value);
  }

  // handles submitting given url (just opens error dialog right now)
  const handleSubmit = (event) => {
    event.preventDefault();
    const promise = extractRecipe(url);
    promise.then((message) => {
      if (message === "success") {
        confirmCreation();
      } else {
        handleErrorOpen(true);
      }
    });
  }

  // handles opening error dialog
  const handleErrorOpen = () => {
    setOpenError(true);
  }

  // handles opening error dialog
  const handleErrorClose = () => {
    setOpenError(false);
  }

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

  return (
    <div>
      <Button disableFocusRipple variant="contained" color="primary" onClick={handleClickOpen}>
        Extract New Recipe
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Extract Recipe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To extract the recipe from your chosen website, please enter the URL to the website here.
          </DialogContentText>
          <form id="extract-form" onSubmit={handleSubmit}>
            <TextField
              required
              autoFocus
              margin="dense"
              id="recipe url"
              label="Recipe URL"
              type="url"
              fullWidth
              onChange={handleChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" type="submit" form="extract-form">
            Extract
          </Button>
        </DialogActions>
        <ErrorButton 
          url={url}
          open={openError}
          handleClose={handleErrorClose}
          handleCancel={handleClose}
        />
      </Dialog>
      <Snackbar
        open={confirm}
        // anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
        autoHideDuration={6000}
        onClose={closeConfirm}
      >
        <Alert onClose={closeConfirm} severity="success" elevation={6} variant="filled">
          Recipe Successfully Extracted!
        </Alert>
      </Snackbar>
    </div>
  );
}