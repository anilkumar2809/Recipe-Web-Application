// #############################################################################
// ################################## Imports ##################################
// #############################################################################

// node modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';


// #############################################################################
// ################################ Dummy Data #################################
// #############################################################################

// dummy data for setting things up at the moment
import {dummyIngredients,dummySteps} from "./DummyRecipes"


// #############################################################################
// ################################ Main Export ################################
// #############################################################################

export default function RecipeView(props) {

  // grab props
  const {
    open,
    data,
    handleClose,
  } = props;

  // styles
  const classes = useStyles();

  // render component
  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {data.rName}
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Recipe Ingredients */}
      <DialogTitle disableTypography>
        <Typography variant="h4">
          Ingredients
        </Typography>
      </DialogTitle>
      {/* Dummy Ingredients */}
      <List dense disablePadding>
        {data.ingredients.map((ingred) => (
          <ListItem key={ingred.iID}>
            <ListItemText primary={"\u2022 "+ingred.iName}/>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* Recipe Steps */}
      <DialogTitle disableTypography>
        <Typography variant="h4">
          Instructions
        </Typography>
      </DialogTitle>
      <List dense disablePadding>
        {data.steps.map((step) => (
          <ListItem key={step.sID}>
            <ListItemText primary={step.sNum +". "+step.sText}/>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

// #############################################################################
// ################################## Styles ###################################
// #############################################################################

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  headers: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
  }
}));


// #############################################################################
// ############################# Helper Functions ##############################
// #############################################################################

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});