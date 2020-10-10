import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Product from '../components/product/Product';
import products from '../products';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  heading: {
    marginTop: 20,
    marginBottom: 30,
  },
}));

const HomeScreen = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.heading} variant='h3'>
        LATEST PRODUCTS
      </Typography>
      <Grid container className={classes.root} spacing={5}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
