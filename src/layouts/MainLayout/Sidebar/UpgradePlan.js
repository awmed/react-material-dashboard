import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.background.dark
  },
  media: {
    paddingTop: theme.spacing(2),
    height: 80,
    textAlign: 'center',
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  }
}));

const UpgradePlan = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <div className={classes.media}>
        <img
          alt="Upgrade to PRO"
          src="/static/images/undraw_resume_folder_2_arse.svg"
        />
      </div>
      <Box
        px={2}
        py={1}
      >
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h6"
        >
          Upgrade to PRO
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body2"
        >
          Upgrade to Devias Kit PRO and get even more components
        </Typography>
      </Box>
      <Box
        px={2}
        py={1}
        display="flex"
        justifyContent="center"
      >
        <Button
          color="primary"
          component="a"
          href="https://devias.io/products/devias-kit-pro"
          variant="contained"
        >
          Upgrade
        </Button>
      </Box>
    </div>
  );
};

UpgradePlan.propTypes = {
  className: PropTypes.string
};

export default UpgradePlan;
