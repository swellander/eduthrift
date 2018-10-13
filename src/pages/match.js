import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import gif from './egg.gif';

class Match extends React.Component {
  render() {
    return (
      <div>
        <Typography style={{ color: 'white' }} variant="display4">
          You Got a Match!
        </Typography>
        <img src={gif} />
      </div>
    );
  }
}

export default Match;