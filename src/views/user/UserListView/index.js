import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Page from 'src/components/Page';
import Table from './Table';
import Toolbar from './Toolbar';
import mockData from './mock';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <Page
      className={classes.root}
      title="Users"
    >
      <Toolbar />
      <div className={classes.content}>
        <Table users={users} />
      </div>
    </Page>
  );
};

export default UserList;
