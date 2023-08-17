import React from 'react';
import './hero.scss';
import Partical from '../Partical/Partical';
import { heroCard } from '../../data';
import { Link } from 'react-router-dom';
import { Box, Stack, Text } from '@chakra-ui/react';
const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-item">
				{heroCard.map((item) => {
					return (
						<Stack
							background={'white'}
							width={'200px'}
							height={'180px'}
							borderRadius={'1rem'}
							padding={'1rem'}
							key={item.id}
						>
							<Link to={item.link}>
								<Box
									height={'100px'}
									fontSize={'3rem'}
									display={'flex'}
									justifyContent={'center'}
									alignItems={'center'}
									fontWeight={'600'}
								>
									{item.icon}
								</Box>
								<hr />
								<Box textAlign={'center'}>
									<Text
										textDecoration={'none'}
										fontSize={'1.2rem'}
									>
										{item.title}
									</Text>
								</Box>
							</Link>
						</Stack>
					);
				})}
			</div>
			<Partical />
		</div>
	);
};

export default Hero;
