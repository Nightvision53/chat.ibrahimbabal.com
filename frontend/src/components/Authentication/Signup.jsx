import { VStack } from '@chakra-ui/layout'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const postDetails = (pics) => { };

    const submitHandler = (e) => { };

    return (
        <VStack spacing="5px" color="black">

            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    value={name}
                    placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
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

            <FormControl id='confirm-password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        value={confirmPassword}
                        type={show ? "text" : "password"}
                        placeholder='Confirm your password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width={"4.5rem"} >
                        <Button h={"1.75rem"} size="sm" onClick={handleClick}>
                            Show
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id="pic">
                <FormLabel>Profile Picture</FormLabel>
                <Input
                    type={"file"}
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}

                />
            </FormControl>
            <Button
                colorScheme="blue"
                width={"100%"}
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup