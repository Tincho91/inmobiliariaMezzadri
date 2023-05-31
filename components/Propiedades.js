"use client";

import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Stack,
  Heading,
  Divider,
  useMediaQuery,
  Center,
  Flex,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/react";

const PropertyCard = ({ property }) => {
  return (
    <Card maxW="sm" overflow="hidden" borderRadius="0">
      <CardBody>
        <Image objectFit="cover" w={"300px"} h={"200px"} src={property.imgSrc} alt="Property" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{property.title}</Heading>
          <Text>{property.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {property.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            View Property
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

const Propiedades = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  const properties = [
    {
      imgSrc: "/images/depto1.jpg",
      title: "Property 1",
      description: "Description 1",
      price: "$1000",
    },
    {
      imgSrc: "/images/depto2.jpg",
      title: "Property 2",
      description: "Description 2",
      price: "$2000",
    },
    {
      imgSrc: "/images/depto3.jpg",
      title: "Property 3",
      description: "Description 3",
      price: "$3000",
    },
    {
      imgSrc: "/images/depto4.jpg",
      title: "Property 4",
      description: "Description 4",
      price: "$4000",
    },
  ];

  return (
    <Box w={"100vw"} minH={"100vh"} overflow={"auto"}>
      <Flex direction="column" align="center" justify="center" marginY={10}>
        <Heading size="lg" mb={10}>
          Propiedades Destacadas
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: isLargerThan1200 ? 4 : 2 }}
          spacing={10}
        >
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </SimpleGrid>
        <Text align="center" mt={10}>
          Para ver más propiedades y/o hacer una consulta, ingrese a nuestro{" "}
          <ChakraLink href="whatsapp_link" color="green.500" isExternal>
            Whatsapp
          </ChakraLink>
          .
        </Text>
      </Flex>
    </Box>
  );
};

export default Propiedades;
