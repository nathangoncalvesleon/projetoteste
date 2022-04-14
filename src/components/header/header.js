import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';

function Header() {
  return (
    <HStack >
      <Box bg="white" w="100%" boxShadow='md' display={'flex'} height={70} alignItems="center" justifyContent={'space-between'} >
        <Box marginLeft="5%" color={'black'}>Header</Box>
        <Text fontWeight={'bold'} marginRight="5%" color={'black'} >EN</Text>

      </Box>
      
    </HStack>
  );
}

export default Header;
