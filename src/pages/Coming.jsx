import React from 'react';
import coming from './coming.json';
import Lottie from 'lottie-react';
const Coming = () => {
	return (
		<div>
			<Lottie animationData={coming} />
		</div>
	);
};

export default Coming;
