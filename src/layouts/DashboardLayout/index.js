import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import {
  useMediaQuery,
  makeStyles,
  useTheme
} from '@material-ui/core';
import NavBar from './NavBar';
import Topbar from './Top';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <NavBar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default DashboardLayout;
