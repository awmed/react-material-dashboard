import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  LinearProgress,
  Typography,
  makeStyles
} from '@material-ui/core';

const user = {
  avatar: '/static/images/avatars/avatar_11.png',
  city: 'Los Angeles',
  country: 'USA',
  name: 'Shen Zhi',
  timezone: 'GTM-7'
};

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    flexGrow: 0,
    flexShrink: 0,
    height: 100,
    marginLeft: 'auto',
    width: 100
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box display="flex">
          <div>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h2"
            >
              John Doe
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {`${user.city} ${user.country}`}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {`${moment().format('hh:mm A')} ${user.timezone}`}
            </Typography>
          </div>
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
        </Box>
        <Box mt={2}>
          <Typography
            color="textPrimary"
            variant="body1"
          >
            Profile Completeness: 70%
          </Typography>
          <LinearProgress
            value={70}
            variant="determinate"
          />
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.uploadButton}
          color="primary"
          variant="text"
        >
          Upload picture
        </Button>
        <Button variant="text">
          Remove picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
