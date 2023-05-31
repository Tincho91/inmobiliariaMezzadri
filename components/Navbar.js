import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link as ChakraLink,
  Image,
  IconButton,
  Collapse,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobileNav = useBreakpointValue({ base: true, md: false });

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500, // Adjust the duration as desired
    });
  };

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      bg="blue.900"
      px={4}
      py={2}
      w="100%"
      boxShadow="md"
    >
      <Flex alignItems="center" maxW="1200px" mx="auto">
        <Image
          src="/images/logo.png"
          alt="Dali Logo"
          maxH="3.5em"
          cursor="pointer"
          onClick={handleScrollToTop} // Scroll to top when logo is clicked
        />
        <Spacer />
        {isMobileNav ? (
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="outline"
            aria-label="Navigation Menu"
          />
        ) : (
          <>
            <ChakraLink
              as={ScrollLink}
              to="quienes-somos"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              mx={2}
              fontWeight={700}
              color={"white"}
            >
              QUIENES SOMOS
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="servicios"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} // Adjust the offset as needed
              activeClass="active"
              mx={2}
              fontWeight={700}
              color={"white"}
            >
              PROPIEDADES
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="sustentabilidad"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} // Adjust the offset as needed
              activeClass="active"
              mx={2}
              fontWeight={700}
              color={"white"}
            >
              SERVICIOS
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="sustentabilidad"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} // Adjust the offset as needed
              activeClass="active"
              mx={2}
              fontWeight={700}
              color={"white"}
            >
              CONTACTO
            </ChakraLink>
          </>
        )}
      </Flex>
      {isMobileNav && (
        <Collapse in={isOpen} animateOpacity>
          <Flex direction="column" mt={4}>
            <ChakraLink
              as={ScrollLink}
              to="productos"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} // Adjust the offset as needed
              activeClass="active"
              mx={2}
              fontWeight={700}
              color={"black"}
              onClick={onToggle} // Close the mobile menu after clicking a link
            >
              QUIENES SOMOS
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="servicios"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} // Adjust the offset as needed
              activeClass="active"
              mx={2}
              fontWeight={700}
              color={"black"}
              onClick={onToggle} // Close the mobile menu after clicking a link
            >
              PROPIEDADES
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="sustentabilidad"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} // Adjust the offset as needed
              activeClass="active"
              mx={2}
              fontWeight={700}
              color={"black"}
              onClick={onToggle} // Close the mobile menu after clicking a link
            >
              SERVICIOS
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="sustentabilidad"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} // Adjust the offset as needed
              activeClass="active"
              mx={2}
              fontWeight={700}
              color={"black"}
              onClick={onToggle} // Close the mobile menu after clicking a link
            >
              CONTACTO
            </ChakraLink>
          </Flex>
        </Collapse>
      )}
    </Box>
  );
};

export default Navbar;
