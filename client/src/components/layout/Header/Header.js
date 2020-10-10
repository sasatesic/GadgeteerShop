import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

import './header.css';

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
        <Container maxWidth='lg'>
          <Toolbar className={classes.toolbar}>
            <Link className='gadgShop' to='/'>
              <Typography variant='h5' className={classes.title}>
                <strong>GadgeteerShop</strong>
              </Typography>
            </Link>
            <Link to='/cart'>
              <Button color='inherit' startIcon={<ShoppingCartIcon />}>
                <Typography className={classes.title}>
                  <strong>Cart</strong>
                </Typography>
              </Button>
            </Link>

            <Link to='/login'>
              <Button color='inherit' startIcon={<PersonIcon />}>
                {' '}
                <Typography className={classes.title}>
                  <strong>Login</strong>
                </Typography>
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
