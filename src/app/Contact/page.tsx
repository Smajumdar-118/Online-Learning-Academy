'use client'; 

import { motion } from 'framer-motion';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Stack, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';

const MotionBox = motion(Box);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
     const response = await axios.post("/api/contact", formData);
     console.log(response);
     if(response.data.status > 210) {
      toast.error(response.data.message);
     }
     else toast.success("Message Sent Successfully");
     setFormData({
      name: '',
      email: '',
      message: ''})
    } catch (error) {
      console.log("Form Submit Failed"+error);
    }
    
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.900"
      p={4}
      
    >
      <MotionBox
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        bg="gray.800"
        boxShadow="lg"
        borderRadius="md"
        p={8}
        maxW="md"
        w="full"
        marginTop={8}
      >
        <Heading as="h1" size="lg" mb={6} textAlign="center" color="white">
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel color="gray.300">Your Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                bg="gray.700"
                color="white"
                _placeholder={{ color: 'gray.400' }}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel color="gray.300">Your Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                bg="gray.700"
                color="white"
                _placeholder={{ color: 'gray.400' }}
              />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel color="gray.300">Your Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                bg="gray.700"
                color="white"
                _placeholder={{ color: 'gray.400' }}
                rows={4}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              w="full"
            >
              Send Message
            </Button>
          </Stack>
        </form>
      </MotionBox>
    </Box>
  );
};

export default Contact;
