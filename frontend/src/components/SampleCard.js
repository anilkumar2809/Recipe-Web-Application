// #############################################################################
// ################################## Imports ##################################
// #############################################################################

// node modules
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles , withStyles } from '@material-ui/core/styles';

// icons
import FireplaceIcon from '@material-ui/icons/Fireplace';
import KitchenIcon from '@material-ui/icons/Kitchen';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// local imports
import EditView from './EditView';
import RecipeView from './RecipeView';
import DeleteView from './DeleteView';

// dummy images
import Image0 from '../../static/sample_images/0.jpg';
import Image1 from '../../static/sample_images/1.jpg';
import Image2 from '../../static/sample_images/2.jpg';
import Image3 from '../../static/sample_images/3.jpg';
import Image4 from '../../static/sample_images/4.jpg';
import Image5 from '../../static/sample_images/5.jpg';
import Image6 from '../../static/sample_images/6.jpg';
import Image7 from '../../static/sample_images/7.jpg';
import Image8 from '../../static/sample_images/8.jpg';


// #############################################################################
// ################################ Main Export ################################
// #############################################################################

const dummyImages = [Image0,Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8];

export default function SampleCard(props) {

  // grab props
  const {
    data,
    num,
    editRecipe,
    deleteRecipe,
    confirmDelete,
  } = props;

  // set state variables
  const [openView, setOpenView] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  // styles
  const classes = useStyles();

  // grab random dummy image
  const image = dummyImages[num];

  // handle click view
  const handleClickView = () => {
    setOpenView(true);
  }

  // handle close view
  const handleCloseView = () => {
    setOpenView(false);
  }

  // handle click edit
  const handleClickEdit = () => {
    setOpenEdit(true);
  }

  // handle close edit
  const handleCloseEdit = () => {
    setOpenEdit(false);
  }

  // confirm recipe edited
  const confirmEdit = () => {
    setConfirm(true);
    setOpenEdit(false);
  }

  // close edit confirmation alert
  const closeConfirm = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setConfirm(false);
  }

  // handle click delete
  const handleClickDelete = () => {
    setOpenDelete(true);
  }

  // handle close delete
  const handleCloseDelete = () => {
    setOpenDelete(false);
  }

  // render component
  return (
    <Grid item xs={12} sm={6} md={4}>
      {/* Actual Sample Card */}
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={image}
          title={`Recipe ${data.rID} Image`}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom noWrap variant="h5" component="h2">
            {data.rName}
          </Typography>
          {/* <Typography>
            Probably add sample of recipe indgredients and/or intructions here.
          </Typography> */}
          <List dense disablePadding>
            <ListItem className={classes.cardItem}>
              <ListItemIcon>
                <FireplaceIcon color="error"/>
              </ListItemIcon>
              <ListItemText>
                Cook Time:
              </ListItemText>
              <ListItemText>
              {data.rCookingTime}
              </ListItemText>
            </ListItem>
            <ListItem className={classes.cardItem}>
              <ListItemIcon>
                <KitchenIcon color="error"/>
              </ListItemIcon>
              <ListItemText>
                Prep Time:
              </ListItemText>
              <ListItemText>
                {data.rPrepTime}
              </ListItemText>
            </ListItem>
            <ListItem className={classes.cardItem}>
              <ListItemIcon>
                <LocalDiningIcon color="error"/>
              </ListItemIcon>
              <ListItemText>
                Servings:
              </ListItemText>
              <ListItemText>
                {data.rServings}
              </ListItemText>
            </ListItem>
          </List>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          {/* <Button disableFocusRipple size="small" color="primary" onClick={handleClickView}>
            View
          </Button>
          <Button disableFocusRipple size="small" color="primary" onClick={handleClickEdit}>
            Edit
          </Button> */}
          <ColoredTooltip disableFocusListener title="Delete" placement="bottom">
            <IconButton disableFocusRipple color="secondary" onClick={handleClickDelete} className={classes.actionIcon}>
              <DeleteIcon/>
            </IconButton>
          </ColoredTooltip>
          <ColoredTooltip disableFocusListener title="Edit" placement="bottom">
            <IconButton disableFocusRipple color="secondary" onClick={handleClickEdit} className={classes.actionIcon}>
              <EditIcon/>
            </IconButton>
          </ColoredTooltip>
          <ColoredTooltip disableFocusListener title="View" placement="bottom">
            <IconButton disableFocusRipple color="secondary" onClick={handleClickView} className={classes.rightAction}>
              <LaunchIcon/>
            </IconButton>
          </ColoredTooltip>
        </CardActions>
      </Card>
      {/* Full-Screen Recipe View */}
      <RecipeView
        open={openView}
        data={data}
        handleClose={handleCloseView}
      />
      {/* Full-Screen View for Editing Recipe */}
      <EditView
        open = {openEdit}
        data = {data}
        handleClose = {handleCloseEdit}
        editRecipe = {editRecipe}
        confirmEdit = {confirmEdit}
      />
      {/* Dialog for Confriming Recipe Deletion */}
      <DeleteView
        open = {openDelete}
        data = {data}
        handleClose = {handleCloseDelete}
        deleteRecipe = {deleteRecipe}
        confirmDelete = {confirmDelete}
      />
      <Snackbar
        open={confirm}
        // anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
        autoHideDuration={6000}
        onClose={closeConfirm}
      >
        <Alert onClose={closeConfirm} severity="success" elevation={6} variant="filled">
          Recipe Successfully Edited!
        </Alert>
      </Snackbar>
    </Grid>
  );
}

// #############################################################################
// ################################## Styles ###################################
// #############################################################################

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardItem: {
    paddingLeft: theme.spacing(1),
  },
  actionTooltip: {
    tooltip: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  cardActions: {
    paddingTop: 0,
  },
  actionIcon: {
  },
  rightAction: {
    marginLeft: "auto",
  },
}));

const ColoredTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.secondary.main,
    fontSize: 12,
  },
}))(Tooltip);