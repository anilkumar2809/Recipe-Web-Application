// #############################################################################
// ################################## Imports ##################################
// #############################################################################

// node modules
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import {ErrorGenerator} from "./api";


// #############################################################################
// ################################ Main Export ################################
// #############################################################################

export default function createErrorButton(props) {

  // get props
  const {
    url,
    open,
    handleClose,
    handleCancel,
  } = props;

  // styles
  const classes = useStyles();

  // confirm recipe creation
  const confirmCreation = () => {
    setConfirm(true);
    setOpen(false);
  }

  // renders error button
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Extraction Failed</DialogTitle>
      <DialogContent>
        <DialogContentText>
          There was an error extracting the recipe from the input URL. Please follow the below link to the recipe website or try again.
        </DialogContentText>
        <DialogContentText className={classes.link}>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {url === null ? "" : url}
          </Link>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleClose}>
          Try Again
        </Button>
      </DialogActions>
    </Dialog>
    );
}

// #############################################################################
// ################################## Styles ###################################
// #############################################################################

const useStyles = makeStyles((theme) => ({
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)-3,
  },
}));