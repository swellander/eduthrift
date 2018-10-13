import React from 'react';
import fakeRequests from '../fakeRequestData';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { isMatch } from '../utils';

class SandwichesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
    };
  }

  handleChange(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.firebase
      .push('requests', this.state)
      .then(response => {
        if (isMatch(this.state, fakeRequests)) {
          return this.props.history.push('/match');
        }
        this.setState({
          title: '',
          author: '',
        });
      })
      .catch(error => {
        switch (error.code) {
          // do something
          default:
          // default error
        }
      });
  }

  render() {
    let payload;
    if (!isLoaded(this.props.requests)) {
      // still waiting for connection
      payload = null;
    }
    if (isLoaded(this.props.requests) && !isEmpty(this.props.requests)) {
      payload = Object.keys(this.props.requests).map(key => {
        let request = this.props.requests[key];
        return (
          <li key={key}>
            <strong>{request.title}</strong> - {request.author}
            <br />
            <p>Condition: {request.condition}</p>
            <i>{request.quantity}</i>
          </li>
        );
      });
    }
    return (
      <div>
        <form
          onSubmit={event => {
            this.handleSubmit(event);
          }}
        >
          <FormControl fullWidth>
            <TextField
              label="Title"
              value={this.state.title}
              onChange={event => {
                this.handleChange(event, 'title');
              }}
              margin="normal"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Author"
              value={this.state.author}
              onChange={event => {
                this.handleChange(event, 'author');
              }}
              margin="normal"
            />
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </form>
        My favorite requests are:
        <ul>{payload}</ul>
      </div>
    );
  }
}

export default compose(
  firebaseConnect(props => [{ path: 'requests' }]),
  connect((state, props) => ({
    requests: state.firebase.data.requests,
  }))
)(SandwichesPage);
