import React from 'react';
import { Link } from 'react-router-dom'

class SignupPage extends React.Component{
    render(){
	return(
	    <div>
		<h1>
		    Signup Page
		</h1>
		<Link to="/">Home</Link><br />
		<Link to="/login">Login</Link>
	    </div>
	)
    }
};

export default SignupPage
