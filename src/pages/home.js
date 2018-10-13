import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import book from './image.png';

class HomePage extends React.Component {
	render() {



		return (
			<div>

				<div>

					<Grid> <img className="filler_image" height="100%" width="100%" src={book} />
					</Grid>



				</div>

				<div>

					<Grid container spacing={24}>

						<Grid item xs={1} id="Give1">

						</Grid>

						<Grid item xs={5} id="Give2">

							<h1 id="thething"> GIVE A BOOK </h1>

							<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Aenean et tortor at risus viverra. Orci a scelerisque purus semper eget duis. Cursus mattis molestie a iaculis. At urna condimentum mattis pellentesque id nibh tortor id. Ultrices in iaculis nunc sed augue lacus viverra. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Metus aliquam eleifend mi in nulla. </p>

							<Button size="large" id="button1" variant="contained" fullWidth="true" component={Link} to="/giveSpecificBooks">Give</Button>

						</Grid>

						<Grid item xs={5} id="Get1">

							<h1> GET A BOOK </h1>

							<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Aenean et tortor at risus viverra. Orci a scelerisque purus semper eget duis. Cursus mattis molestie a iaculis. At urna condimentum mattis pellentesque id nibh tortor id. Ultrices in iaculis nunc sed augue lacus viverra. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Metus aliquam eleifend mi in nulla. </p>

							<Button className="thisismybutton" size="large" id="button2" variant="contained" fullWidth="true" component={Link} to="/getSpecificBooks">Get</Button>

						</Grid>

						<Grid item xs={1} id="Get2">

						</Grid>




					</Grid>


				</div>



			</div>
		);
	}
}

export default HomePage;
