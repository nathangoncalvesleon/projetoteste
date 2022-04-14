import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import Header from './components/header/header'
import Login from './pages/Login/Login';

function App() {
  return (
    <ChakraProvider>
      <Login/>
    </ChakraProvider>
  );
}

export default App;
