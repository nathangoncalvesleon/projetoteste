import React from 'react';
import Header from '../../components/header/header';
import { Center, VStack, Box, HStack } from '@chakra-ui/react';

function Main() {
  return (
    <>
      <Header />

      <Center alignItems={'center'} justifyContent="center" marginTop="5%">
        <HStack
          w="50%"
          bg="black"
          h="150px"
          alignItems={'center'}
          justifyContent="space-around"
        >
          <Box w="35%" h="80%" bg="red">
            1
          </Box>
          <Box w="35%" h="80%" bg="green">
            1
          </Box>
          <Box w="35%" h="80%" bg="gray">
            1
          </Box>
        </HStack>
      </Center>
    </>
  );
}

export default Main;
