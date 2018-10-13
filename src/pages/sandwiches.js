import React from 'react';
import fakeRequests from '../fakeRequestData';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { check, sendEmail } from '../utils';

class SandwichesPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			author: '',
			quantity: 0,
			condition: ''
		}
	}

	handleChange(event, field) {
		this.setState({
			[field]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.firebase.push('books', this.state)
			// also available:
			// this.props.firebase.update
			// this.props.firebase.remove
			.then((response) => {
				//call matching function
				// isMatch(this.state, fakeRequests)
				sendEmail('daniel8247@outlook.com', { name: 'Daniel' });
				this.props.history.push('/match');

				//if true => redirect to match page - push to history
				//history.push('/match');
				//else 

				console.log(this.state)
				this.setState({
					title: '',
					author: '',
					quantity: 0,
					condition: ''
				});
			})
			.catch((error) => {
				switch (error.code) {
					// do something
					default:
					// default error
				}
			});
	}

	render() {
		console.log('hey', this.props.auth)
		let payload;
		if (!isLoaded(this.props.books)) {
			// still waiting for connection
			payload = null;
		}
		if (isLoaded(this.props.books) && !isEmpty(this.props.books)) {
			payload = Object.keys(this.props.books).map((key) => {
				let book = this.props.books[key];
				return <li key={key}>
					<strong>{book.title}</strong> - {book.author}<br />
					<p>Condition: {book.condition}</p>
					<i>{book.quantity}</i>
				</li>
			});
		}
		return (
			<div>
				<form onSubmit={(event) => { this.handleSubmit(event); }}>
					<FormControl fullWidth>
						<TextField
							label="Title"
							value={this.state.title}
							onChange={(event) => { this.handleChange(event, 'title'); }}
							margin="normal"
						/>
					</FormControl>
					<FormControl fullWidth>
						<TextField
							label="Author"
							value={this.state.author}
							onChange={(event) => { this.handleChange(event, 'author'); }}
							margin="normal"
						/>
					</FormControl>
					<FormControl fullWidth>
						<TextField
							label="Condition"
							value={this.state.condition}
							onChange={(event) => { this.handleChange(event, 'condition'); }}
							margin="normal"
						/>
					</FormControl>
					<FormControl>
						<TextField
							type="number"
							label="Quantity"
							value={this.state.quantity}
							onChange={(event) => { this.handleChange(event, 'quantity'); }}
							margin="normal"
						/>
					</FormControl>
					<Button type="submit"
						variant="contained"
						color="primary">
						Add
		    </Button>
				</form>
				My favorite books are:
				<ul>
					{payload}
				</ul>
			</div>
		)
	}
}

export default compose(
	firebaseConnect((props) => [
		{ path: 'books' }
	]),
	connect((state, props) => ({
		books: state.firebase.data.books,
		auth: state.firebase.auth
	}))
)(SandwichesPage)
