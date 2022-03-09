// #############################################################################
// ################################## Imports ##################################
// #############################################################################

// node modules
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SearchBar from 'material-ui-search-bar';
import Snackbar from '@material-ui/core/Snackbar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

// local imports
import CreateButton from './CreateButton';
import ExtractButton from './ExtractButton';
import SampleCard from './SampleCard';


// #############################################################################
// ################################ Main Export ################################
// #############################################################################

export default function BaseLayout(props) {

  // grab props
  const {
    recipeData,
    createRecipe,
    editRecipe,
    deleteRecipe,
    searchRecipes,
    clearSearch,
    extractRecipe,
  } = props;

  // styles
  const classes = useStyles();

  // set state variables
  const [searchString, setSearchString] = React.useState(null);
  const [confirmDelete, setConfirmDelete] = React.useState(false);

  // handle search change
  const searchChange = (searchString) => {

    setSearchString(searchString);
  }

  // handle search submit
  const searchSubmit = () => {
    if (searchString === null || searchString === "") {
      clearSearch();
    } else {
      searchRecipes(searchString);
    }
  }

  // handle search cancel
  const searchCancel = () => {
    setSearchString(null);
    clearSearch();
  }

  // confirm recipe deleted
  const confirmDel = () => {
    console.log("Got to confirmDel");
    setConfirmDelete(true);
    setOpenDelete(false);
  }

  // close delete confirmation alert
  const closeConfirmDelete = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setConfirmDelete(false);
  }

  // render component
  return (
    <React.Fragment>
      <CssBaseline />

      {/* App Bar */}
      <AppBar position="relative">
        <Toolbar>
          <RestaurantIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Recipe Extractor
          </Typography>
        </Toolbar>
      </AppBar>
      {/* End App Bar */}

      {/* Main Body */}
      <main>

        {/* Hero unit */}
        <div className={classes.heroContent} >
          <Container maxWidth="sm">

            {/* Title and Description */}
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Recipe Extractor
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Your online website for extracting, creating, and storing all your favorite digital recipes.
            </Typography>
            {/* End Title and Description */}

             {/* Action Buttons */}
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <ExtractButton extractRecipe={extractRecipe}/>
                </Grid>
                 <Grid item>
                  <CreateButton createRecipe={createRecipe}/>
                </Grid>
              </Grid>
            </div>
            {/* End Action Buttons */}

          </Container>
        </div>
        {/* End Hero Unit */}

        {/* Search Bar */}
        <Container className={classes.searchContainer} maxWidth="md">
          <SearchBar
            onRequestSearch={searchSubmit}
            onChange={searchChange}
            onCancelSearch={searchCancel}
            cancelOnEscape
            placeholder="Search Recipes ..."
          />
          {/* Can use this to show loading bar if search takes time */}
          {/* {isLoading && <LinearProgress />} */}
        </Container>
        {/* End Search Bar */}

        {/* Recipe List */}
        <Container className={classes.cardGrid} maxWidth="md">
          {
            Object.entries(recipeData).length === 0 
            ? (
              <Grid container alignItems="center" justify="center" className={classes.noFound}>
                <Typography variant="h4">No Matches Found</Typography>
              </Grid>
            )
            : (
              <Grid container spacing={4}>
                {/* Map Recipe Data to Sample Cards */}
                {Object.entries(recipeData).map(([rID,recipe],index) => (
                  <SampleCard 
                    key={rID}
                    data={recipe}
                    num={recipe.rID%9}
                    editRecipe={editRecipe}
                    deleteRecipe={deleteRecipe}
                    confirmDelete={confirmDel}
                    />
                ))}
              </Grid>
            )
          }
        </Container>
        {/* End Recipe List */}

        {/* Delete Confirmation */}
        <Snackbar
          open={confirmDelete}
          // anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
          autoHideDuration={6000}
          onClose={closeConfirmDelete}
        >
          <Alert onClose={closeConfirmDelete} severity="success" elevation={6} variant="filled">
            Recipe Successfully Deleted!
          </Alert>
        </Snackbar>

      </main>
      {/* End Main Body */}

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End Footer */}
    </React.Fragment>
  );
}

// #############################################################################
// ################################## Styles ###################################
// #############################################################################

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  searchContainer: {
    marginTop: theme.spacing(4),
  },
  noFound: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


// #############################################################################
// ############################# Helper Functions ##############################
// #############################################################################

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Recipe Extractor
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}