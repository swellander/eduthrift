import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>

		<Button size="large" variant="contained" component={Link} to="/Give">Give</Button>

		<Button size="large" variant="contained" component={Link} to="/Get">Get</Button>

      </div>
    );
  }
}

export default HomePage;
