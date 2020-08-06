import React from 'react';
import {
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="404"
    >
      <Container maxWidth={false}>
        <Box
          display="flex"
          justifyContent="center"
        >
          <div>
            <Typography
              align="center"
              color="textPrimary"
              variant="h1"
            >
              404: The page you are looking for isn’t here
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="subtitle2"
            >
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <Box textAlign="center">
              <img
                alt="Under development"
                className={classes.image}
                src="/static/images/undraw_page_not_found_su7k.svg"
              />
            </Box>
          </div>
        </Box>
      </Container>
    </Page>
  );
};

export default NotFoundView;
