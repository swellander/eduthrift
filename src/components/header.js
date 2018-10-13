import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
  button: {
    borderRadius: 5,
    width: 50,
    height: 25,
    padding: 3,
    color: 'white',
    fontSize: 16,

  },

  navbar: {
    background: 'darkgreen',
    color: 'white',
    font: 'helvetica'

  },

  h1: {
    color: 'white',
    fontWeight: 'bolder',
    decoration: 'none'
  }
}

class Header extends React.Component{
    constructor(props){
	super(props);
	this.state = {

	}
    }

    logout(){
	this.props.firebase.logout();
    }

    render(){
	let greeting;
	if(!this.props.auth.isLoaded){
	    // auth is still warming up
	    // so unsure if user is logged in or not;
	    greeting = null;
	}
	if(this.props.auth.isLoaded && !this.props.auth.isEmpty){
	    // user is logged in!
	 greeting = <span>
   <Link to="/profile">
      <Button style = {styles.button}
              variant="contained"
              style={{marginLeft: 30}}
            >Profile</Button></Link>

  <Link to="/matches">
		    <Button style = {styles.button}
        variant="contained"
			           style={{marginLeft: 30}}
			           >Matches</Button></Link>

	<Button style = {styles.button}
  color="inherit"
			     onClick={() => {this.logout();}}>Logout</Button>

      </span>;
	}
	if(this.props.auth.isLoaded && this.props.auth.isEmpty){
	    // user is not logged in
	    greeting =
		<span>
		    <Link to="/login">
			<Button style = {styles.button}>
			Login
			</Button>
	    	    </Link>

		    <Link to="/signup">
			<Button style = {styles.button}>
			Signup
			</Button>
	    	    </Link>
		</span>
	    ;
	}

	return(
	    <div>
		<AppBar>
		    <Toolbar style = {styles.navbar}>
			    <Typography variant="title" color="inherit" style={{flexGrow: 1}}>
			<a href="/">	<h1 style = {styles.h1}>
				    EduThrift</h1></a>

			    </Typography>
			<div>
			    {greeting}
			</div>
		    </Toolbar>
		</AppBar>

	    </div>
	);
    }
}

export default compose(
    firebaseConnect(),
    connect(({firebase: {auth}}) => ({auth}))
)(Header);
