import React from 'react';
import './LoginBtn.css';

const LoginBtn = props => (

	<div className="login-btn" onClick={() => props.selectService('selectTable')}>INGRESAR AL SISTEMA</div>

)

export default LoginBtn;