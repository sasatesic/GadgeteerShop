import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

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
  const [value, setValue] = React.useState(product.rating);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.image}
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {product.name}
            </Typography>
            <Typography component='legend'>
              {product.rating} out of {product.numReviews} reviews
            </Typography>
            <Rating name='read-only' value={value} precision={0.5} readOnly />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Product;
