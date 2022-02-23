import { VStack } from '@chakra-ui/layout'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const postDetails = (pics) => { };

    const submitHandler = (e) => { };

    return (
        <VStack spacing="5px" color="black">

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    value={email}
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        value={password}
                        type={show ? "text" : "password"}
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width={"4.5rem"} >
                        <Button h={"1.75rem"} size="sm" onClick={handleClick}>
                            Show
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>



            <Button
                colorScheme="blue"
                width={"100%"}
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Login
            </Button>
            <Button
                colorScheme="red"
                width={"100%"}
                style={{ marginTop: 15 }}
                onClick={() => {
                    setEmail("guest@example.com");
                    setPassword("123456");
                }}
            >
                Get Guest Credentials
            </Button>

        </VStack>
    )
}

export default Login