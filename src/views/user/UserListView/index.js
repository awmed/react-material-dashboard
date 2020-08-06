import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Table from './Table';
import Toolbar from './Toolbar';
import mockData from './mock';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
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
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Table users={users} />
        </Box>
      </Container>
    </Page>
  );
};

export default UserList;
