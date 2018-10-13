import React from 'react';
import { Link, Route } from 'react-router-dom';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import ReactDOM from "react-dom";
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import PropTypes from 'prop-types';


class ProfilePage extends React.Component{
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    constructor(props){
    	super(props);
    	this.state = {
        email: '',
        firstname: '',
        lastname: '',
    	}
    }


  handleChange(event, field){
	      this.setState({
	     [field]: event.target.value
	 });
}

logout(){
   this.props.firebase.logout();
}




render(){

return(
  <div>
	<p>Email: {this.props.profile.email}</p>
  <p>Name: {this.props.profile.firstname} {this.props.profile.lastname}</p>

</div>
);

  }
}


export default compose(
    firebaseConnect(),

 connect((state, props) => ({
 events: state.firebase.data.events})),
connect(({firebase: {auth}}) => ({auth})),
connect(({firebase: { profile } }) => ({ profile }))

)(ProfilePage);
