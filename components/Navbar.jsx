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
      <Flex 
        as="nav"
        p='2' 
        borderBottom='1px' 
        borderColor='gray.100' 
        alignItems='center' 
        position='fixed' 
        top='0' 
        width='100%' 
        bg='white' 
        zIndex='10'
      >
        <Link href='/' passHref>
          <Box fontSize='3xl' color='blue.400' fontWeight='bold' paddingRight='4' cursor="pointer">
            <Image src="/logo2.webp" alt="Logo" boxSize="50px" objectFit="cover" />
          </Box>
        </Link>
        <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
          <Link href='/' paddingLeft='2'>EstateSphere</Link>
        </Box>
        <Spacer />
        
        <Box display={{ base: 'block', md: 'none' }}>
          <Menu>
            <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' aria-label="Menu" />
            <MenuList>
              <Link href='/' passHref>
                <MenuItem icon={<FcMenu />}>Home</MenuItem>
              </Link>
              <Link href='/search?purpose=for-sale' passHref>
                <MenuItem icon={<FcMenu />}>Buy Property</MenuItem>
              </Link>
              <Link href='/search?purpose=for-rent' passHref>
                <MenuItem icon={<FcMenu />}>Rent Property</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>

        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center" cursor="pointer" marginRight='60px'>
          <Link href='/' passHref>
            <Box 
              as="span" 
              padding='2' 
              _hover={{ color: 'blue.500' }}  
              display="flex" 
              alignItems="center"
            >
              <Text display="inline">Home</Text>
            </Box>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <Box 
              as="span" 
              padding='2' 
              _hover={{ color: 'blue.500' }} 
              display="flex" 
              alignItems="center"
            >
              <Text display="inline">Buy Property</Text>
            </Box>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <Box 
              as="span" 
              padding='2' 
              _hover={{ color: 'blue.500' }} 
              display="flex" 
              alignItems="center"
            >
              <Text display="inline">Rent Property</Text>
            </Box>
          </Link>
        </Flex>
      </Flex>

      <Flex 
        as="section" 
        p='4' 
        alignItems="center" 
        justifyContent="center" 
        marginTop='60px'
      >
        <Input 
          placeholder="Search for properties..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          width={{ base: '70%', md: '40%' }} 
          mr='2' 
        />
        <Button colorScheme="blue" onClick={handleSearch}>Search</Button>
      </Flex>
    </>
  );
};

export default Navbar;
