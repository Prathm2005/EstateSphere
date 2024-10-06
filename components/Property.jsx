import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } }) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex 
      flexWrap='wrap' 
      w={{ base: 'full', sm: '100%', md: '420px' }}  // Full width for mobile, fixed width for larger screens
      p='5' 
      paddingTop='0px' 
      justifyContent='flex-start' 
      cursor='pointer'
      _hover={{ boxShadow: 'lg', transform: 'scale(1.02)', transition: '0.3s ease-in-out' }}
      bg='white'
      borderRadius='10px'
      border='1px solid' 
      borderColor='gray.200'
    >
      <Box borderRadius='10px' overflow='hidden' w='full'>
        <Image 
          src={coverPhoto ? coverPhoto.url : DefaultImage} 
          width={400} 
          height={260} 
          objectFit="cover"
          layout="responsive"
        />
      </Box>
      <Box w='full' p='4'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.400'>
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight='bold' fontSize='lg' color='blue.600'>
              AED {millify(price)}{rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size='sm' src={agency?.logo?.url}></Avatar>
          </Box>
        </Flex>
        <Flex 
          alignItems='center' 
          p='1' 
          justifyContent='space-between' 
          w='full' 
          maxW='250px' 
          color='gray.500'
        >
          <Flex alignItems='center'>
            {rooms} <FaBed style={{ marginLeft: '4px', marginRight: '8px' }} />
          </Flex>
          <Flex alignItems='center'>
            {baths} <FaBath style={{ marginLeft: '4px', marginRight: '8px' }} />
          </Flex>
          <Flex alignItems='center'>
            {millify(area)} sqft <BsGridFill style={{ marginLeft: '4px' }} />
          </Flex>
        </Flex>
        <Text fontSize='md' color='gray.700' noOfLines={1}>
          {title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;
