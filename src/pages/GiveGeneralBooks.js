import React from 'react';
import { Button } from 'reactstrap';

class GiveGeneralBooks extends React.Component {
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
    const { quantity, age, condition, subject } = this.state;
    return (
      <form name="giveGeneral" onSubmit={this.handleSubmit}>
        <h4>Please give general details of books</h4>

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
        <Button type="submit">Give</Button>
        <br />
      </form>
    );
  }
}
export default GiveGeneralBooks;
