import { Box, Text } from '@chakra-ui/react';

const Footer = () => (
  <Box 
    textAlign='center' 
    p='4' 
    bg='gray.800' 
    color='white' 
    borderTop='1px solid' 
    borderColor='gray.700'
  >
    <Text fontSize="sm">
      &copy; {new Date().getFullYear()} EstateSphere. All Rights Reserved.
    </Text>
  </Box>
);

export default Footer;
