import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography
        color="textPrimary"
        variant="body1"
      >
        &copy;
        {' '}
        <Link
          component="a"
          href="https://devias.io/"
          target="_blank"
        >
          Devias IO
        </Link>
        . 2020
      </Typography>
      <Typography
        color="textPrimary"
        variant="caption"
      >
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
