import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Divider,
  Drawer,
  makeStyles
} from '@material-ui/core';
import {
  AccountBox as AccountBoxIcon,
  Dashboard as DashboardIcon,
  LockOpen as LockOpenIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  ShoppingBasket as ShoppingBasketIcon
} from '@material-ui/icons';
import Profile from './Profile';
import SidebarNav from './SidebarNav';
import UpgradePlan from './UpgradePlan';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = ({
  className,
  open,
  variant,
  onClose,
  ...rest
}) => {
  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/app/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Users',
      href: '/app/users',
      icon: <PeopleIcon />
    },
    {
      title: 'Products',
      href: '/app/products',
      icon: <ShoppingBasketIcon />
    },
    {
      title: 'Authentication',
      href: '/login',
      icon: <LockOpenIcon />
    },
    {
      title: 'Account',
      href: '/app/account',
      icon: <AccountBoxIcon />
    },
    {
      title: 'Settings',
      href: '/app/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        <UpgradePlan />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
