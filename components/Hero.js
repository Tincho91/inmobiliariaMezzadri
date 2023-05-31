"use client";

import React from "react";
import { Box, Text, Center, Flex, Button as ChakraButton } from "@chakra-ui/react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <Box position="relative" w="100%" h="100vh" mt={'40px'}>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(0,0,0,.6)"
      />
      <video
        src="/mardelplata.mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Center position="absolute" top="0" left="0" w="100%" h="100%">
        <Flex direction="column" align="center" color="white">
          <Text 
            fontSize={{base: "25px", sm: "45px", md: "65px", lg:"80px"}}
            fontWeight={900}
            mb={2}
          >
            Tu próximo capítulo
          </Text>
          <Flex direction={"row"}>
            <Text fontSize={{base: "25px", sm: "45px", md: "65px", lg:"80px"}} mb={2}>comienza&nbsp;</Text>
            <Text fontSize={{base: "25px", sm: "45px", md: "65px", lg:"80px"}} fontWeight={900} color="teal">Aquí.</Text>
          </Flex>
          <Flex mt={5} direction={["column", "row"]}>
            <Link to="nosotros" smooth={true} duration={500}>
              <ChakraButton colorScheme="teal" size="lg" m={5}>
                Conócenos
              </ChakraButton>
            </Link>
            <Link to="contacto" smooth={true} duration={500}>
              <ChakraButton colorScheme="teal" size="lg" m={5}>
                Contáctanos
              </ChakraButton>
            </Link>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export default Hero;

