import React from 'react';

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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  handleSubmit(ev) {
    ev.preventDefault();
  }

  render() {
    const { quantity, title, author, age, condition, subject } = this.state;
    return (
      <form name="getSpecific" onSubmit={this.handleSubmit}>
        <h4>Please give specific details of book</h4>
        <label htmlFor="title">Title: </label>
        <input name="title" value={title} onChange={this.handleChange} />
        <br />
        <label htmlFor="author">Author: </label>
        <input name="author" value={title} onChange={this.handleChange} />
        <label htmlFor="quantity">Quantity: </label>

        <input name="quantity" value={quantity} onChange={this.handleChange} />
        <br />
        <label htmlFor="age">Age: </label>
        <select value={age} onChange={this.handleChange}>
          <option>--select age group --</option>
          <option value="preteen">old</option>
          <option value="teen">good</option>
          <option value="adult">new</option>
        </select>
        <br />
        <label htmlFor="condition">condtion: </label>
        <select value={condition} onChange={this.handleChange}>
          <option>--select condition --</option>
          <option value="old">old</option>
          <option value="good">good</option>
          <option value="new">new</option>
        </select>
        <br />
        <label htmlFor="subject">subject: </label>
        <select value={subject} onChange={this.handleChange}>
          <option>--select subject --</option>
          <option value="science">science</option>
          <option value="history">history</option>
          <option value="english">english</option>
          <option value="math">math</option>
        </select>
        <br />
        <button type="submit">Get</button>
      </form>
    );
  }
}
export default GetSpecificBooks;
