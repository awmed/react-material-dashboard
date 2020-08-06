import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Topbar from './Topbar';

const useStyles = makeStyles(({
  root: {
    paddingTop: 64,
    height: '100%'
  },
  content: {
    height: '100%'
  }
}));

const MinimalLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default MinimalLayout;
