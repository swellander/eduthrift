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

class LoginPage extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			firstname: '',
			lastname: ''
		};
	}

	handleChange(event, field) {
		this.setState({
			[field]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.firebase.login(this.state)
			.then((response) => {
				this.props.history.push('/profile')
				// do something
			})
			.catch((error) => {
				switch (error.code) {
					case 'auth/user-not-found':
						// do something
						break;
					case 'auth/wrong-password':
					case 'auth/invalid-email':
						// do something
						break;
					case 'auth/network-request-failed':
						// do something
						break;
					default:
					// default error
				}
			});
	}

	logout() {
		this.props.firebase.logout();
	}

	render() {
		let payload;
		if (!this.props.auth.isLoaded) {
			// auth is not warmed up
			payload = null;
		}
		if (this.props.auth.isLoaded && this.props.auth.isEmpty) {
			// auth is ready
			// but user is not logged in
			payload =
				<form onSubmit={(event) => { this.handleSubmit(event); }}>
					<FormControl fullWidth>
						<TextField
							label="Email"
							value={this.state.email}
							onChange={(event) => { this.handleChange(event, 'email'); }}
							margin="normal"
						/>
					</FormControl>
					<FormControl fullWidth>
						<TextField
							label="Password"
							type="password"
							value={this.state.password}
							onChange={(event) => { this.handleChange(event, 'password'); }}
							margin="normal"
						/>
					</FormControl>
					<Button type="submit"
						variant="contained"
						color="primary">
						Login
		</Button>
				</form>;
		}
		if (this.props.auth.isLoaded && !this.props.auth.isEmpty) {
			console.log(this.props.auth);
			// auth is warmed up
			// and user is not logged in
			payload = <div>
				<div>
					Welcome {this.props.auth.email}
				</div>
				<div>
					<Button variant="contained"
						color="secondary"
						onClick={() => { this.props.firebase.logout(); }}>
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

export default compose(
	firebaseConnect(),
	connect(({ firebase: { auth } }) => ({ auth })),
	connect(({ firebase: { profile } }) => ({ profile }))
)(LoginPage);
