import { createMuiTheme, colors } from '@material-ui/core';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.common.white,
      dark: '#F4F6F8',
      paper: colors.common.white
    },
    divider: colors.grey[200],
    primary: {
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.blue.A400
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
