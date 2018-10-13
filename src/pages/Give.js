import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Give extends React.Component{
    render(){
	return(
	    <div>

		<Button size="large" variant="contained" component={Link} to="/Give_spec">Specific</Button>

		<Button size="large" variant="contained" component={Link} to="/Give_gen">Unspecific</Button>

		

	    </div>

	)
    }

};

export default Give
