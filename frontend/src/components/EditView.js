// #############################################################################
// ################################## Imports ##################################
// #############################################################################

// node modules
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle  from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ClearIcon from '@material-ui/icons/Clear';
import CloseIcon from '@material-ui/icons/Close';


// #############################################################################
// ################################ Main Export ################################
// #############################################################################

export default function EditView(props) {

  // grab props
  const {
    open,
    data,
    handleClose,
    editRecipe,
    confirmEdit,
  } = props;

  // set state variables
  const [counter, setCounter] =React.useState(data.ingredients.length + data.steps.length);
  const [name, setName] = React.useState(data.rName);
  const [cooktime, setCookTime] = React.useState(data.rCookingTime);
  const [preptime, setPrepTime] = React.useState(data.rPrepTime);
  const [servings, setServings] = React.useState(data.rServings);
  const [ingredients, setIngredients] = React.useState(
    data.ingredients.map((ingred,index) => ({
      id: index,
      value: ingred.iName,
    }))
  );
  const [steps, setSteps] = React.useState(
    data.steps.map((step,index) => ({
      id: index,
      value: step.sText,
    }))
  );

  // styles
  const classes = useStyles();

  // increase counter
  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter+1);
  }

  // useEffect for updating the counter every time the component changes
  React.useEffect(() => {
    incrementCounter();
  },[ingredients,steps]);
  // useEffect for clearing data when closed
  React.useEffect(() => {
    setCounter(data.ingredients.length + data.steps.length);
    setName(data.rName);
    setCookTime(data.rCookingTime);
    setPrepTime(data.rPrepTime);
    setServings(data.rServings);
    setIngredients(
      data.ingredients.map((ingred,index) => ({
        id: index,
        value: ingred.iName,
      }))
    );
    setSteps(
      data.steps.map((step,index) => ({
        id: index,
        value: step.sText,
      }))
    );
  },[open]);

  // handles submitting given url (just closes dialog at the moment)
  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      rID: data.rID,
      rName: name,
      rCookingTime: cooktime,
      rPrepTime: preptime,
      rServings: servings,
      ingredients: ingredients.map((ingred) => (ingred.value)),
      steps: steps.map((step) => (step.value)),
    }
    console.log(newRecipe);
    const promise = editRecipe(newRecipe);
    promise.then(confirmEdit);
  }

  // handle name change
  const handleNameChange = (event) => {
    let value = event.target.value;
    if (value.length > 500) {
      value = value.substring(0,500);
    }
    setName(value);
  }

  // handle cooktime change
  const handleCookChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 0) {
      setCookTime(value);
    } else {
      setCookTime(0);
    }
  }

  // handle preptime change
  const handlePrepChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 0) {
      setPrepTime(value);
    } else {
      setPrepTime(0);
    }
  }

  // handle servings change
  const handleServChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 0) {
      setServings(value);
    } else {
      setServings(0);
    }
  }

  // update ingredients value
  const updateIngredients = (id, value) => {
    let v = value;
    if (v.length > 500) {
      v = v.substring(0,500);
    }
    setIngredients((prevIngredients) => {
      let newIngredients = prevIngredients.slice();
      for (let ingredient of newIngredients) {
        if (ingredient.id === id) {
          ingredient.value = v;
        }
      }
      return newIngredients;
    });
  } 

  // update steps value
  const updateSteps = (id, value) => {
    let v = value;
    if (v.length > 2000) {
      v = v.substring(0,2000);
    }
    setSteps((prevSteps) => {
      let newSteps = prevSteps.slice();
      for (let step of newSteps) {
        if (step.id === id) {
          step.value = v;
        }
      }
      return newSteps;
    });
  }

  // add ingredient
  const addIngredient = () => {
    setIngredients((prevIngredients) => {
      let newIngredients = prevIngredients.slice();
      newIngredients.push({id: counter, value: null});
      return newIngredients;
    });
  }

  // add step
  const addStep = () => {
    setSteps((prevSteps) => {
      let newSteps = prevSteps.slice();
      newSteps.push({id: counter, value: null});
      return newSteps;
    });
  }

  // delete ingredient
  const deleteIngredient = (id) => {
    if (ingredients.length > 1) {
      setIngredients((prevIngredients) => {
        let newIngredients;
        for (let i=0; i<prevIngredients.length; i++) {
          let ingredient = prevIngredients[i]
          if (ingredient.id === id) {
            newIngredients = prevIngredients.slice(0,i).concat(prevIngredients.slice(i+1,prevIngredients.length));
            break;
          }
        }
        return newIngredients;
      });
    }
  }

  // delete step
  const deleteStep = (id) => {
    if (steps.length > 1) {
      setSteps((prevSteps) => {
        let newSteps;
        for (let i=0; i<prevSteps.length; i++) {
          let step = prevSteps[i]
          if (step.id === id) {
            newSteps = prevSteps.slice(0,i).concat(prevSteps.slice(i+1,prevSteps.length));
            break;
          }
        }
        return newSteps;
      });
    }
  }

  // render component
  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Edit Recipe
          </Typography>
          <Button color="inherit" type="submit" form="recipe-form">
            save
          </Button>
        </Toolbar>
      </AppBar>
      <form id="recipe-form" onSubmit={handleSubmit}>
        {/* Recipe Highlights */}
        <DialogTitle disableTypography className={classes.headers}>
          <Typography variant="h4">
            Overview
          </Typography>
        </DialogTitle>
        <DialogContent className={classes.content}>
          <Grid container spacing={4}>
            <Grid item container>
              <TextField
                value={name}
                required
                autoFocus
                margin="dense"
                id="name"
                label="Recipe Title"
                type="text"
                onChange={handleNameChange}
                style={{width: 649}}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item>
              <TextField
                value={cooktime}
                required
                margin="dense"
                id="cooktime"
                label="Cook Time"
                type="number"
                onChange={handleCookChange}
              />
            </Grid>
            <Grid item>
              <TextField
                value={preptime}
                required
                margin="dense"
                id="preptime"
                label="Prep Time"
                type="number"
                onChange={handlePrepChange}
              />
            </Grid>
            <Grid item>
              <TextField
                value={servings}
                required
                margin="dense"
                id="servings"
                label="Servings"
                type="number"
                onChange={handleServChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <Divider />
        {/* Recipe Ingredients */}
        <DialogTitle disableTypography className={classes.headers}>
          <Typography variant="h4">
            Ingredients
            <IconButton onClick={addIngredient}>
              <AddCircleIcon color="secondary" fontSize="large"/>
            </IconButton>
          </Typography>
        </DialogTitle>
        <DialogContent className={classes.content}>
          <Grid container spacing={4} container alignItems="center">
            {ingredients.map(({id,value},index) => (
              <Grid key={id} item>
                <TextField
                  value={value}
                  required
                  variant="outlined"
                  margin="dense"
                  id={"ingredient "+id}
                  label={"Ingredient "+(index+1)}
                  type="text"
                  onChange={(event) => {updateIngredients(id,event.target.value)}}
                />
                <IconButton onClick={() => {deleteIngredient(id)}} className={classes.IconButton}>
                  <ClearIcon />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <Divider />
        {/* Recipe Steps */}
        <DialogTitle disableTypography className={classes.headers}>
          <Typography variant="h4">
            Instructions
            <IconButton onClick={addStep}>
              <AddCircleIcon color="secondary" fontSize="large"/>
            </IconButton>
          </Typography>
        </DialogTitle>
        <DialogContent className={classes.content}>
          <Grid container spacing={4}>
            {steps.map(({id,value},index) => (
              <Grid key={id} item xs={12} container alignItems="center">
                <TextField
                  value={value}
                  required
                  margin="dense"
                  id={"instruction "+id}
                  label={"Instruction "+(index+1)}
                  type="text"
                  onChange={(event) => {updateSteps(id,event.target.value)}}
                  style={{width: 649}}
                />
                <IconButton onClick={() => {deleteStep(id)}} className={classes.IconButton}>
                  <ClearIcon />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </form>
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
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
    paddingBottom: theme.spacing(4),
  },
}));


// #############################################################################
// ############################# Helper Functions ##############################
// #############################################################################

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});