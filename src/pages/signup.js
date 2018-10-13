import React from 'react';
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

const styles = {
  button: {
    borderRadius: 2,
    width: 150,
    height: 50,
    color: 'white',
    background: 'darkgreen',
    '&:hover': {
        color: 'darkgreen',
        background: '#F6F6F6',
    }
  },

  input: {
    color:"darkgreen",
    border:'none',
    paddingLeft: 5,
  },

  signupcard: {
    background: '#F6F6F6',
    width: '35em',
    padding: 25,
    margin: 'auto',
    marginTop: '3em',
    borderRadius: 3

},

formcontrol: {
  width: 500,
  margin: 20,
},

textfield: {
  background: 'white',
  padding: 5,
  border: '1px solid lightgrey',
  borderRadius: 3,
},

h3: {
  fontSize: 16,
  padding: 0,
  margin: 0,
  lineHeight: 0,
  color: 'darkgreen',
  textAlign: 'left',
},



};


class SignupPage extends React.Component{
  componentDidMount() {
  window.scrollTo(0, 0)
}
    constructor(props){
	super(props);
	this.state = {
	    email: '',
	    password: '',
      firstname: '',
      lastname: ''
	};
    }

    handleChange(event, field){
	this.setState({
	    [field]: event.target.value
	});
    }

    handleSubmit(event){
	event.preventDefault();

  const credentials = {
    username: this.state.firstname + this.state.lastname,
    email: this.state.email,
    password: this.state.password,
    firstname: this.state.firstname,
  }
  const profile = {
    username:this.state.firstname + this.state.lastname,
    email: this.state.email,
    firstname: this.state.firstname,
    lastname: this.state.lastname,

  }

	this.props.firebase.createUser(credentials,profile)
	    .then((response) => {
		      this.props.history.push('/profile')

	    })
	    .catch((error) => {

		switch(error.code){
		    case 'auth/email-already-in-use':
			// do something
			break;
		    case 'auth/invalid-email':
			break;
		    case 'auth/operation-not-allowed':
			// do something
			break;
		    case 'auth/weak-password':
			// do something
			break;
		    default:
			// default error
		}
	    });
    }

    render(){

	let payload;
	if(!this.props.auth.isLoaded){
	    // auth is not warmed up
	    payload = null;
	}
	if(this.props.auth.isLoaded && this.props.auth.isEmpty){
	    // auth is ready
	    // but user is not logged in
	    payload =
      <form onSubmit={(event) => {this.handleSubmit(event);}}>

      <div style={styles.signupcard}>
          <FormControl style={styles.formcontrol}>
          <h3 style={styles.h3}>Email:</h3>
    		    <TextField
          style={styles.textfield}
          InputProps={{style: styles.input,}}
    			value={this.state.email}
    			onChange={(event) => {this.handleChange(event, 'email');}}
    			margin="normal"/>
	        </FormControl>

          <FormControl style={styles.formcontrol}>
          <h3 style={styles.h3}>First Name:</h3>
            <TextField
          style={styles.textfield}
          InputProps={{style: styles.input,}}
          value={this.state.firstname}
          onChange={(event) => {this.handleChange(event, 'firstname');}}
          margin="normal"/>
          </FormControl>

          <FormControl style={styles.formcontrol}>
          <h3 style={styles.h3}>Last Name:</h3>
            <TextField
          style={styles.textfield}
          InputProps={{style: styles.input,}}
          value={this.state.lastname}
          onChange={(event) => {this.handleChange(event, 'lastname');}}
          margin="normal"/>
          </FormControl>

		      <FormControl style={styles.formcontrol}>
          <h3 style={styles.h3}>Password:</h3>
    		    <TextField
          style={styles.textfield}
          InputProps={{style: styles.input,}}
    			type="password"
    			value={this.state.password}
    			onChange={(event) => {this.handleChange(event, 'password');}}
    			margin="normal"/>
		      </FormControl>

    <Button style={styles.button}
      type="submit">Signup</Button>

      </div>
	</form>;
	}
	if(this.props.auth.isLoaded && !this.props.auth.isEmpty){
	    // auth is warmed up
	    // and user is logged in
	    payload = <div>
		<div>
		    Welcome {this.props.email}
		</div>
		<div>
		    <Button variant="contained"
			    color="secondary"
			    onClick={() => {this.props.firebase.logout();}}>
			Logout
		    </Button>

		</div>
	    </div>;

    }
    return (
			<div>
				{payload}
			</div>
		)
	}
};


export default withStyles(styles)(compose(
    firebaseConnect(),
    connect(({firebase: {auth}}) => ({auth})),
    connect(({ firebase: { profile } }) => ({ profile }))
)(SignupPage));
