import React, { useState } from 'react';
import './Login.css';
// import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Action/User';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const loginHandler = (e) => {
		e.preventDefault();
		dispatch(loginUser(email, password));
	};

	return (
		<div className="login">
			<form className="loginForm" onSubmit={loginHandler}>
				<input
					type="email"
					placeholder="Email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type="password"
					placeholder="Password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Link to="/forgot/password">Forgate Password?</Link>

				<button type="submit">Login</button>

				<Link to="/register">New user? register here</Link>
			</form>
		</div>
	);
};

export default Login;
