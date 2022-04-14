import React from 'react'
import Header from '../../components/header/header'
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
function Login() {
  return (
      <>
      <Header/>

      <Stack bg='#F9FCFF'  minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'} color='black'>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel color='black'>Email address</FormLabel>
            <Input boxShadow='lg' boxSizing='border-box' type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel color='black'>Password</FormLabel>
            <Input boxShadow='lg'   type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox borderColor='black'  color='black'>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button boxShadow='lg' bg='#F4C23B' color='black' h='50px' variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      
    </Stack>
    </>

  )
}

export default Login