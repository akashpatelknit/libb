import { HStack, VStack,Stack } from '@chakra-ui/react';
import React from 'react';

const Programming = () => {
	return (
		<>
			<Stack direction={['row', 'column']} width={'80%'}>
				<VStack
					width={['70%', '100%']}
					background={'red'}
					height={'300px'}
				>
					fdg
				</VStack>

				<VStack
					width={['30%', '100%']}
					background={'yellow'}
					height={'300px'}
				>
					fj
				</VStack>
			</Stack>
		</>
	);
};

export default Programming;
