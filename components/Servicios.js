"use client";

import React from "react";
import {
  Box,
  Text,
  Button,
  Center,
  Flex,
  Link as ChakraLink,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  VStack,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

const StyledCard = styled(Card)`
  box-sizing: border-box;
  text-align: center;
  color: #555;
  cursor: pointer;
  border-color: #f2f2f2;
  border-style: solid;
  text-shadow: 0 0.5px 1px #777, 0 2px 6px #f2f2f2;
  border-width: 1px;
  border-radius: 10px;
  background: linear-gradient(to bottom, #f9f9f9 0%, #d2d2d2 80%, #c0c0c0 100%);
  transition: box-shadow 0.3s ease, transform 0.15s ease;
  box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 6px 0 #c0c0c0,
    0 8px 17px rgba(0, 0, 0, 0.4), 2px 1px 4px rgba(0, 0, 0, 0.25),
    -2px 1px 4px rgba(0, 0, 0, 0.25), 0 9px 16px rgba(0, 0, 0, 0.1);

  &:hover,
  &:focus {
    box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 4px 0 #c0c0c0,
      0 2px 35px rgba(0, 0, 0, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.25),
      -2px 2px 4px rgba(0, 0, 0, 0.25), 0 7px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(2px);
  }

  &:active {
    box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 0 0 #c0c0c0,
      0 0px 30px rgba(0, 0, 0, 0.15), 2px 2px 4px rgba(0, 0, 0, 0.25),
      -2px 2px 4px rgba(0, 0, 0, 0.25), 0 0px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(4px);
  }
`;

const Servicios = () => {
  const services = [
    {
      title: "Quiero Comprar",
      description: "Te ayudamos a encontrar la propiedad de tus sueños.",
      whatsappMessage: "Hola, estoy interesado en comprar una propiedad.",
    },
    {
      title: "Quiero Vender",
      description: "Te ayudamos a vender tu propiedad al mejor precio.",
      whatsappMessage: "Hola, estoy interesado en vender mi propiedad.",
    },
    {
      title: "Quiero Tasar Mi Propiedad",
      description: "Te ofrecemos una tasación justa y precisa de tu propiedad.",
      whatsappMessage: "Hola, estoy interesado en tasar mi propiedad.",
    },
  ];

  const whatsappNumber = "2235643434";

  return (
    <Box
      bg="teal"
      w={"100vw"}
      minH={"100vh"}
      id="servicios"
      position={"relative"}
    >
      <Center position="absolute" top="0" left="0" w="100%" h="100%">
        <Flex
          direction="column"
          align="center"
          justify="center"
          w={"95%"}
          maxW={"1200px"}
          mx={"auto"}
        >
          <Box py={10} px={5}>
            <Heading textAlign={"center"} mb={10}>
              NUESTROS SERVICIOS
            </Heading>
            <SimpleGrid columns={{ base: "1", md: "3" }} spacing={10}>
              {services.map((service, index) => (
                <ChakraLink
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    service.whatsappMessage
                  )}`}
                  isExternal
                  _hover={{ textDecoration: "none", transform: "scale(1.05)" }} // scale up on hover
                  _active={{ transform: "scale(0.95)" }} // scale down on click
                >
                  <StyledCard
                    key={index}
                    bg="gray.300"
                    color="white"
                    p={5}
                    borderRadius="md"
                    boxShadow="sm"
                    transition="transform 0.2s" // smooth transform transition
                    minH={{ base: "none", md: "270px" }}
                  >
                    <CardHeader>
                      <Heading size="md">{service.title}</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text fontSize="md">{service.description}</Text>
                    </CardBody>
                  </StyledCard>
                </ChakraLink>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default Servicios;
