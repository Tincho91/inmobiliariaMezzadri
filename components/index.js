'use client'

import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Hero from './Hero';
import Nosotros from './Nosotros';
import Propiedades from './Propiedades';
import Servicios from './Servicios';
import WhatsappButton from './utils/WhatsApp';

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Nosotros />
      <Propiedades />
      <Servicios />
      <WhatsappButton />
    </Box>
  );
};

export default Index;