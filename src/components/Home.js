import React from 'react';
import LoginBtn from './LoginBtn';
import './Home.css';

const Home = props => {

	return (
		<div className="app-container">
			<div className="title">Burger Queen</div>
			<input className="username-input" placeholder="Ingresa tu usuario"></input>
			<input className="password-input" type="password" placeholder="Ingresa tu contraseña"></input>
			<LoginBtn selectService={props.selectService} />
		</div>
	);

}
export default Home;