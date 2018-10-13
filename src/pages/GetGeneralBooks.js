import React from 'react';
// import {match} from store;

class GetGeneralBooks extends React.Component {
  constructor() {
    super();
    this.state = {
      age: '',
      condition: '',
      subject: '',
      quantity: 0,
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
    const { title, author, age, condition, subject } = this.state;
    return (
      <form name="getGeneral" onSubmit={this.handleSubmit}>
        <h4>Please give general details of book</h4>

        <label htmlFor="quantity">Quantity: </label>
        <input name="quantity" value={title} onChange={this.handleChange} />
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

export default GetGeneralBooks;
