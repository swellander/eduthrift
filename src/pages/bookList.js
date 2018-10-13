import React from 'react';
import fakeBookData from '../fakeBookData';

class BookList extends React.Component{
  state = {
    open: true,
  };
  render(){
    return(
      <div>
      <h1>
      Books we have available!
      </h1>
      <ul>
      {fakeBookData.map(x => <li>{x.title} - {x.author}</li>)}
      </ul>
      </div>
    )
  }
}

export default BookList;
