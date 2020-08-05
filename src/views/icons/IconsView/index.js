import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  iframe: {
    width: '100%',
    minHeight: 640,
    border: 0
  }
}));

const IconsView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Icons"
    >
      <iframe
        className={classes.iframe}
        src="https://material.io/tools/icons/?icon=accessibility&style=outline"
        title="Material Design icons"
      />
    </Page>
  );
};

export default IconsView;
