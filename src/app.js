/*
   --------
   import the packages we need
   --------
 */

import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './style/theme';
import initialState from './initialState.json';
import './style/main.css';
import Header from './components/header';
import Grid from '@material-ui/core/Grid';



/*
   --------
   import your pages here
   --------
 */

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import SandwichesPage from './pages/sandwiches';



/*
   --------
   configure everything
   --------
 */

const firebaseConfig = {
    /*
       --------
       REPLACE WITH YOUR FIREBASE CREDENTIALS
       --------
     */
    apiKey: "AIzaSyBG77YDn4V4IdZ-FeOtRz_cxWVWGPh5W8w",
    authDomain: "hackcooper2018.firebaseapp.com",
    databaseURL: "https://hackcooper2018.firebaseio.com",
    projectId: "hackcooper2018",
    storageBucket: "hackcooper2018.appspot.com",
    messagingSenderId: "334634513401"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);









/*
   --------
   setup redux and router
   --------
 */


const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer
});

const store = createStoreWithFirebase(rootReducer, initialState);


const ConnectedRouter = connect()(Router);



export default class App extends React.Component{
    render(){
	return(
	    <MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<ConnectedRouter>
			    <div id="container">
				<Grid container
				justify="center">
				    <Grid item sm={6}>
					<Header></Header>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/signup" component={SignupPage} />
					<Route exact path="/sandwiches" component={SandwichesPage} />
				    </Grid>
				</Grid>
			    </div>
			</ConnectedRouter>
		</Provider>
	    </MuiThemeProvider>
	);
    }
}
