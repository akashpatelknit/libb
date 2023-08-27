import React from 'react';
import blog from './icons/blog.json'
import book from './icons/book_icon.json'
import discuss from './icons/discuss.json'
import program from './icons/programming.json'
import exam from './icons/exam.json'
import resource from './icons/resourse.json'
import tuned from './icons/tuned.json'


import {
	BsCodeSlash,
	BsFillPersonFill,
	BsFillProjectorFill,
} from 'react-icons/bs';

import { FaBloggerB } from 'react-icons/fa';
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

export const features = [
	{
		id: 1,
		title: '📚 Library of Knowledge',
		description:
			' Dive into our extensive collection of recommended and reference books tailored to your courses. Access the materials you need to excel in your studies and broaden your horizons.',
		image: book,
		data_aos: 'fade-left',
		link: '/book',
	},
	{
		id: 2,
		title: '📝 Ace Your Exams',
		description:
			'Prepare confidently for exams with access to a wealth of past exam papers and sample questions. Sharpen your skills and boost your confidence by practicing with real-world tests.',
		image: exam,
		data_aos: 'fade-right',
		link: '/ace_exam',
	},
	{
		id: 3,
		title: '💻 Coding Companion',
		description:
			'For the tech-savvy minds, our programming guide is here to guide you through coding concepts, languages, and hands-on projects. From beginners to advanced programmers, there something for everyone.',
		image: program,
		data_aos: 'fade-left',
		link: '/programming',
	},
	{
		id: 9,
		title: '📰 Student Blog',
		description:
			'Join a community of students and faculty sharing their insights, experiences, and knowledge. Get a dose of inspiration, stay updated on the latest trends, and engage in meaningful discussions.',
		image: blog,
		data_aos: 'fade-right',
		link: '/blog',
	},
	{
		id: 4,
		title: '🗣️ Discussion Forums',
		description:
			'Have questions or want to discuss a topic? Our discussion boards are the perfect place to connect with peers and experts. Collaborate on projects, seek advice, and expand your network.',
		image: discuss,
		data_aos: 'fade-left',
		link: '/forum',
	},
	{
		id: 5,
		title: '📢 Stay Informed: ',
		description:
			' Never miss a beat with our announcements section. Stay informed about important dates, events, and college news, ensuring you are always one step ahead.',
		image: tuned,
		data_aos: 'fade-right',
		link: '/announcement',
	},
	{
		id: 1,
		title: '📂 Resource Center',
		description:
			'Download lecture notes, study materials, and other valuable resources to enhance your learning. Access everything you need in one organized hub.',
		image: resource,
		data_aos: 'fade-left',
		link: '/resource',
	},
];
