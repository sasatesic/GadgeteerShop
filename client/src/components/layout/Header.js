import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    paddingLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position='static'>
        <Container maxWidth={'xl'}>
          <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
              <strong>GadgeteerShop</strong>
            </Typography>
            <Button color='inherit' startIcon={<ShoppingCartIcon />}>
              <Typography className={classes.title}>
                <strong>Shopping Basket</strong>
              </Typography>
            </Button>
            <Button color='inherit' startIcon={<PersonIcon />}>
              {' '}
              <Typography className={classes.title}>
                <strong>Login</strong>
              </Typography>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
