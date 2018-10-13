import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Button } from 'reactstrap';
import { isMatch } from '../utils';

class GetSpecificBooks extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      quantity: 0,
      age: '',
      condition: '',
      subject: '',
      userId: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.auth.uid && this.props.auth.uid)
      this.setState({ userId: this.props.auth.uid });
  }
  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  handleSubmit(ev) {
    ev.preventDefault();
    this.props.firebase
      .push('requests', this.state)
      .then(response => {
        const keys = Object.keys(this.props.books);
        const bookArray = keys.map(key => {
          return this.props.books[key];
        });

        //check for match
        const match = isMatch(this.state, bookArray);
        if (isMatch(this.state, bookArray)) {
          //send matched user an email
          console.log(match);
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
    const { quantity, title, author, age, condition, subject } = this.state;
    return (
      <form name="getSpecific" onSubmit={this.handleSubmit}>
        <h4>Please give specific details of books</h4>
        <label htmlFor="title">Title: </label>
        <input name="title" value={title} onChange={this.handleChange} />
        <br />
        <label htmlFor="author">Author: </label>
        <input name="author" value={author} onChange={this.handleChange} />
        <br />
        <label htmlFor="quantity">Quantity: </label>
        <input name="quantity" value={quantity} onChange={this.handleChange} />
        <br />
        <label htmlFor="age">Age: </label>
        <select name="age" value={age} onChange={this.handleChange}>
          <option>--select age group --</option>
          <option value="preteen">preteen</option>
          <option value="teen">teen</option>
          <option value="adult">adult</option>
        </select>
        <br />
        <label htmlFor="condition">Condition: </label>
        <select name="condition" value={condition} onChange={this.handleChange}>
          <option>--select condition --</option>
          <option value="old">old</option>
          <option value="good">good</option>
          <option value="new">new</option>
        </select>
        <br />
        <label htmlFor="subject">Subject: </label>
        <select name="subject" value={subject} onChange={this.handleChange}>
          <option>--select subject --</option>
          <option value="science">science</option>
          <option value="history">history</option>
          <option value="english">english</option>
          <option value="math">math</option>
        </select>
        <br />
        <Button color="primary" type="submit">
          Get
        </Button>
      </form>
    );
  }
}

export default compose(
  firebaseConnect(props => [{ path: 'books' }]),
  connect((state, props) => ({
    books: state.firebase.data.books,
    auth: state.firebase.auth,
  }))
)(GetSpecificBooks);
