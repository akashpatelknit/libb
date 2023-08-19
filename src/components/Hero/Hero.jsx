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
							// marginTop={'4rem'}
						>
							<Link
								to={item.link}
								style={{ textDecoration: 'none' }}
							>
								<Box
									height={'100px'}
									fontSize={'3rem'}
									display={'flex'}
									justifyContent={'center'}
									alignItems={'center'}
									fontWeight={'600'}
									style={{ background: '#79E0EE' }}
									borderRadius={'1rem'}
								>
									{item.icon}
								</Box>
								<hr />
								<Box
									textAlign={'center'}
								>
									<Text
										textDecoration={'none'}
										fontSize={'1.2rem'}
										color={'#91737f'}
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
