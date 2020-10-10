import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import products from '../products';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Typography, Divider, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  imgCard: {
    marginTop: 10,
  },
  root: {
    maxWidth: 1000,
    maxHeight: 1000,
  },
  heading: {
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    position: 'relative',
    bottom: 4.5,
  },
  nameText: {
    fontSize: 30,
    textTransform: 'uppercase',
  },
  ratingBox: {
    display: 'flex',
  },
  rating: {
    marginTop: 20,
    marginBottom: 20,
  },
  reviewText: {
    position: 'relative',
    top: 21,
    left: 10,
  },
  price: {
    fontSize: 27,
    marginBottom: 20,
  },
  desc: {
    marginTop: 20,
  },
  listRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listPriceTitle: {
    flexGrow: 1,
    fontSize: 20,
  },
  listPriceTxt: {
    fontSize: 20,
  },
  inStock: {
    color: '#76ff03',
    fontSize: 20,
  },
  outOfStock: {
    color: '#ff1744',
    fontSize: 20,
  },
  addTOCartBtn: {
    margin: 'auto',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
}));

const ProductScreen = ({ match }) => {
  const classes = useStyles();
  const product = products.find((p) => p._id === match.params.id);
  const {
    name,
    rating,
    numReviews,
    image,
    price,
    description,
    countInStock,
  } = product;

  return (
    <>
      <Grid container className={classes.heading} spacing={3}>
        <Grid item md={6}>
          <Card raised='true' className={classes.root}>
            <CardMedia
              component='img'
              alt='Contemplative Reptile'
              image={`${image}`}
              title='Contemplative Reptile'
            />
          </Card>
        </Grid>
        <Grid item md={3}>
          <Typography variant='h3' className={classes.nameText}>
            {name}
          </Typography>
          <Divider />
          <div className={classes.ratingBox}>
            <Rating
              className={classes.rating}
              name='read-only'
              value={rating}
              precision={0.5}
              readOnly
            />
            <Typography className={classes.reviewText} component='legend'>
              {numReviews} reviews
            </Typography>
          </div>
          <Typography className={classes.price} variant='h5'>
            Price: ${price}
          </Typography>
          <Divider />
          <Typography className={classes.desc}>{description}</Typography>
        </Grid>
        <Grid item md={3}>
          <div className={classes.root}>
            <Card raised='true'>
              <List component='nav' aria-label='main mailbox folders'>
                <ListItem>
                  <Typography className={classes.listPriceTitle}>
                    Price:{' '}
                  </Typography>
                  <Typography className={classes.listPriceTxt}>
                    ${price}
                  </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                  <Typography className={classes.listPriceTitle}>
                    Status:{' '}
                  </Typography>
                  <Typography
                    className={
                      countInStock > 0 ? classes.inStock : classes.outOfStock
                    }
                  >
                    {countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                  <Button
                    className={classes.addTOCartBtn}
                    variant='contained'
                    color='primary'
                    size='large'
                    disabled={countInStock === 0}
                  >
                    ADD TO CART
                  </Button>
                </ListItem>
              </List>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductScreen;
