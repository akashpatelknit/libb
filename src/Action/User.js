import axios from 'axios';
axios.defaults.withCredentials = true;
const uri = 'http://localhost:8080';
export const loginUser = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: 'LoginRequest',
		});
	console.log(email, password);
		const { data } = await axios.post(
			`${uri}/api/v1/login`,
			{ email, password },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		dispatch({
			type: 'LoginSuccess',
			payload: data.user,
		});
	} catch (error) {
		dispatch({
			type: 'LoginFailure',
			payload: error.response.data.message,
		});
	}
};

export const loadUser = () => async (dispatch) => {
	try {
		dispatch({
			type: 'LoadUserRequest',
		});

		const { data } = await axios.get(`${uri}/api/v1/me`);

		dispatch({
			type: 'LoadUserSuccess',
			payload: data.user,
		});
	} catch (error) {
		dispatch({
			type: 'LoadUserFailure',
			payload: error.response.data.message,
		});
	}
};

export const registerUser =
	(name, email, password) => async (dispatch) => {
		try {
			dispatch({
				type: 'RegisterRequest',
			});

			const { data } = await axios.post(
				`${uri}/api/v1/register`,
				{ name, email, password },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			dispatch({
				type: 'RegisterSuccess',
				payload: data.user,
			});
		} catch (error) {
			dispatch({
				type: 'RegisterFailure',
				payload: error.response.data.message,
			});
		}
	};