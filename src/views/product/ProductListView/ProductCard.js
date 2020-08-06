import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  root: {},
  imageContainer: {
    alignItems: 'center',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    display: 'flex',
    height: 64,
    justifyContent: 'center',
    margin: '0 auto',
    overflow: 'hidden',
    width: 64
  },
  image: {
    width: '100%'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl}
          />
        </div>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {product.description}
        </Typography>
      </CardContent>
      <Divider />
      <Box p={1}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid item>
            <AccessTimeIcon color="action" />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid item>
            <Box
              alignItems="center"
              display="flex"
            >
              <GetAppIcon color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                {product.totalDownloads}
                Downloads
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
