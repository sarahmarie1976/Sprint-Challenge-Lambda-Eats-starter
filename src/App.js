import React from 'react';
import { Button, Navbar, Card, CardImg, TabContent } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import OrderForm from './Form';

const App = () => {
	return (
		<>
			<Navbar color="info">
				<h1 style={{ color: 'whitesmoke' }}>Lambda Eats</h1>

				<Link to={'/'}>
					<Button color="info">Home</Button>
				</Link>
			</Navbar>

			<Route exact path="/">
				<Card>
					<CardImg src={require('./Assets/Pizza.jpg')} />
					<Link to={'/pizza'}>
						<Button
							color="info"
							style={{ position: 'absolute', left: '70%', top: '50%' }}
						>
							Pizza!
						</Button>
					</Link>
				</Card>
			</Route>

			<Route path="/pizza">
				<OrderForm />
			</Route>
		</>
	);
};
export default App;
