import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


render() {

  const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" className={classes.button}>
        Default
      </Button>

      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
    </div>
  );
};
}


export default withStyles(styles)(Button);
