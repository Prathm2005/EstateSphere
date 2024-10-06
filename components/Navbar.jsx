import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Image, Text, Input, Button } from '@chakra-ui/react';
import { FcMenu } from 'react-icons/fc';
import { useState } from 'react';
import { useRouter } from 'next/router'; 

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter(); 

  const handleSearch = () => {
    if (searchTerm) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <>
      {/* Navbar */}
      <Flex 
        as="nav"
        p='4' 
        borderBottom='1px' 
        borderColor='gray.200' 
        alignItems='center' 
        position='fixed' 
        top='0' 
        width='100%' 
        bg='white' 
        zIndex='1000'
        boxShadow='sm'
      >
        {/* Logo */}
        <Link href='/' passHref>
          <Flex alignItems="center" cursor="pointer">
            <Image src="/logo2.webp" alt="Logo" boxSize="50px" objectFit="cover" />
            <Text fontSize='xl' fontWeight='bold' color='blue.500' pl='2'>EstateSphere</Text>
          </Flex>
        </Link>
        <Spacer />
        
        {/* Search Input */}
        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Input 
            placeholder="Search for properties..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            width='250px'
            mr='2' 
          />
          <Button colorScheme="blue" onClick={handleSearch}>Search</Button>
        </Flex>

        {/* Mobile Menu */}
        <Box display={{ base: 'block', md: 'none' }}>
          <Menu>
            <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' aria-label="Menu" />
            <MenuList>
              <Link href='/' passHref>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link href='/search?purpose=for-sale' passHref>
                <MenuItem>Buy Property</MenuItem>
              </Link>
              <Link href='/search?purpose=for-rent' passHref>
                <MenuItem>Rent Property</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>

        {/* Desktop Links */}
        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Link href='/' passHref>
            <Text px='4' _hover={{ color: 'blue.500' }} cursor="pointer">Home</Text>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <Text px='4' _hover={{ color: 'blue.500' }} cursor="pointer">Buy Property</Text>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <Text px='4' _hover={{ color: 'blue.500' }} cursor="pointer">Rent Property</Text>
          </Link>
        </Flex>
      </Flex>

      {/* Search Bar for Mobile */}
      <Flex 
        as="section" 
        p='4' 
        alignItems="center" 
        justifyContent="center" 
        marginTop='70px' 
        display={{ base: 'flex', md: 'none' }}
      >
        <Input 
          placeholder="Search for properties..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          width='70%' 
          mr='2' 
        />
        <Button colorScheme="blue" onClick={handleSearch}>Search</Button>
      </Flex>
    </>
  );
};

export default Navbar;
