import { createMuiTheme, colors } from '@material-ui/core';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.blue.A400
    },
    success: {
      main: colors.green[600]
    },
    info: {
      main: colors.blue[600]
    },
    warning: {
      main: colors.orange[600]
    },
    error: {
      main: colors.red[600]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
    background: {
      default: '#F4F6F8',
      paper: colors.common.white
    },
    divider: colors.grey[200]
  },
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
