import React from 'react';
import xxx from './xxx.json';
import Lottie from 'lottie-react';
const Loading = () => {
	return (
		<div>
			<Lottie animationData={xxx} />
		</div>
	);
};

export default Loading;
