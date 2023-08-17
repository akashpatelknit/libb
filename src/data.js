import {
	BsCodeSlash,
	BsFillPersonFill,
	BsFillProjectorFill,
} from 'react-icons/bs';
import {FaBloggerB} from 'react-icons/fa'
export const options = [
	'First Year',
	'Second Year',
	'Third Year',
	'FInal Year',
	'MCA',
];

export const url = 'https://libraryserver.vercel.app';

export const branch = ['It', 'Cs', 'ECE', 'Mech', 'Civil', 'EL'];
export const heroCard = [
	{
		id: 1,
		link: '/programming',
		icon: <BsCodeSlash />,
		title: 'Programming',
		color: '#eec0c6',
		image: `linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)`,
	},
	{
		id: 2,
		link: '/project',
		icon: <BsFillProjectorFill />,
		title: 'Projects',
	},
	{
		id: 3,
		link: '/portfolio',
		icon: <BsFillPersonFill />,
		title: 'Portfolio',
	},
	{
		id: 4,
		link: '/blog',
		icon: <FaBloggerB />,
		title: 'Blog',
	},
];
