"use client";

import React from "react";
import {
  Box,
  Text,
  Image,
  Button,
  Center,
  Flex,
  Link as ChakraLink,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { TimeIcon, AddIcon, CheckIcon, InfoIcon } from "@chakra-ui/icons";

const Nosotros = () => {
  const categories = [
    {
      title: "Experiencia",
      description:
        "Más de 25 años en el sector inmobiliario con un enfoque humano.",
      icon: <TimeIcon boxSize={5} />,
    },
    {
      title: "Nuestro equipo",
      description:
        "Expertos dedicados a entender tus necesidades y aspiraciones.",
      icon: <AddIcon boxSize={5} />,
    },
    {
      title: "Compromiso",
      description:
        "Profesionales comprometidos con tu bienestar y satisfacción.",
      icon: <CheckIcon boxSize={5} />,
    },
    {
      title: "Misión",
      description:
        "Tu sueño es nuestra misión. Estamos aquí para hacerlo realidad.",
      icon: <InfoIcon boxSize={5} />,
    },
  ];

  return (
    <Box
      bg="teal"
      w={"100vw"} 
      minH={"100vh"} 
      overflow={"auto"}
      id="nosotros"
      position={"relative"}
    >
      <Flex direction="column" align="center" justify="center" marginY={10} w={"95%"} maxW={"1200px"} mx={"auto"}>
        <Box py={10} px={5}>
          <Heading textAlign={"center"} mb={10}>
            QUIENES SOMOS
          </Heading>
          <SimpleGrid columns={[1, 2]} spacing={10}>
            {" "}
            {categories.map((category, index) => (
              <Card
                key={index}
                bg="white"
                p={5}
                borderRadius="md"
                boxShadow="sm"
              >
                <CardHeader>
                  <HStack spacing={3}>
                    {category.icon}
                    <Heading size="md">{category.title}</Heading>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <Text fontSize="md">{category.description}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
          <Center>
            <Image src="ruta_a_tu_imagen" alt="Team" mb={10} />
          </Center>
          <Center>
            <ChakraLink
              as={ScrollLink}
              to="contacto"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} // Adjust the offset as needed
              activeClass="active"
            >
              <Button colorScheme="blue" size="lg">
                Contáctenos
              </Button>
            </ChakraLink>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default Nosotros;