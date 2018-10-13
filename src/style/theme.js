import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },

  overrides: {
MuiInput: {
    underline: {
  '&:after': {
    borderBottom: `2px solid #FFFFFF`,
  },
  '&$focused:after': {
    borderBottomColor: `#FFFFFF`,
  },
  '&$error:after': {
    borderBottomColor: `#FFFFFF`,
  },
  '&:before': {
    borderBottom: ` #FFFFFF`,
  },
  '&:hover:not($disabled):not($focused):not($error):before': {
    borderBottom: ` #FFFFFF`,
  },
  '&$disabled:before': {
    borderBottom: ' #FFFFFF',
    },
},
},
  },
});

export default theme;
