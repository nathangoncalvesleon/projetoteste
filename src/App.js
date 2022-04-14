import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import Header from './components/header/header'
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

function App() {
  return (
    <ChakraProvider>
      <Main/>
    </ChakraProvider>
  );
}

export default App;
