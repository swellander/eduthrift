import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Get extends React.Component{
    render(){
	return(
	    <div>
		<p>
		    Sample text regarding website
		</p>

		<Button size="large" variant="contained" component={Link} to="/Get_spec">Specific</Button>

		<Button size="large" variant="contained" component={Link} to="/Get_gen">Unspecific</Button>

	    </div>

	)
    }

};

export default Get
