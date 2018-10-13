import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Get extends React.Component{
    render(){
	return(


<div>

      	<div>
      	
      		<Grid container spacing={24}>

      			<Grid item xs={1} id="Give1">

      			</Grid>

      			<Grid item xs={5} id="Give2">
      		
      				<h1 id="thething"> Do you need a specific book...</h1>


				<Button size="large" id="button1" fullWidth="true" variant="contained" component={Link} to="/Get_spec">Specific</Button>

      			</Grid>

				<Grid item xs={5} id="Get1">

				      <h1> ...or mixed books? </h1>


      					<Button size="large" variant="contained" id="button2" fullWidth="true" component={Link} to="/Get_gen">Mixed</Button>

      			</Grid>

      			 <Grid item xs={1} id="Get2">

      			</Grid>




      			</Grid>


      </div>



	    </div>

	)
    }

};




		

		



export default Get
