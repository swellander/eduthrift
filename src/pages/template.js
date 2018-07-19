import React from 'react';
import { Link } from 'react-router-dom'

class TemplatePage extends React.Component{
    render(){
	return(
	    <div>
		<h1>
		    Template Page
		</h1>
		<Link to="/another_page">Another Page</Link>
	    </div>
	)
    }
};

export default TemplatePage
