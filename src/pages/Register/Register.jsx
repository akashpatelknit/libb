
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Register.css';
import { registerUser } from '../../Action/User';
// import { useAlert } from 'react-alert';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	// const [avatar, setAvatar] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	// const alert = useAlert();
	const { loading, error } = useSelector((state) => state.user);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(registerUser(name, email, password));
	};

	// useEffect(() => {
	// 	if (error) {
	// 		alert.error(error);
	// 		dispatch({ type: 'clearErrors' });
	// 	}
	// }, [dispatch, error, alert]);
	return (
		<div className="register">
			<form className="registerForm" onSubmit={submitHandler}>
				<input
					type="text"
					value={name}
					placeholder="Name"
					className="registerInputs"
					required
					onChange={(e) => setName(e.target.value)}
				/>

				<input
					type="email"
					placeholder="Email"
					className="registerInputs"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type="password"
					className="registerInputs"
					placeholder="Password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Link to="/">Already Signed Up? Login Now</Link>

				<button disabled={loading} type="submit">
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Register;
