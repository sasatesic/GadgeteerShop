import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

const Product = ({ product }) => {
  const classes = useStyles();

  const { numReviews, price, name, image, _id, rating } = product;

  return (
    <>
      <Card className={classes.root}>
        <Link to={`/product/${_id}`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography
                className='productName'
                gutterBottom
                variant='h5'
                component='h2'
              >
                {name}
              </Typography>
              <Rating
                name='read-only'
                value={rating}
                precision={0.5}
                readOnly
              />
              <Typography component='legend'>{numReviews} reviews</Typography>
              <Typography variant='h4' className={classes.title}>
                <strong>${price}</strong>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
