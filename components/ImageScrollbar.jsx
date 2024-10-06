import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize={{ base: 'xl', md: '2xl' }}  // Adjust font size for mobile
        cursor='pointer'
        color='gray.600'
      />
    </Flex>
  );
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize={{ base: 'xl', md: '2xl' }}  // Adjust font size for mobile
        cursor='pointer'
        color='gray.600'
      />
    </Flex>
  );
}

export default function ImageScrollbar({ data }) {
  return (
    <ScrollMenu 
      LeftArrow={LeftArrow} 
      RightArrow={RightArrow} 
      style={{ overflow: 'hidden' }}  // Hide overflow for cleaner look
    >
      {data.map((item) => (
        <Box 
          key={item.id} 
          itemId={item.id} 
          p='1'
          overflow='hidden' 
          width={{ base: '80vw', sm: '60vw', md: '910px' }}  // Responsive widths for mobile, tablet, desktop
        >
          <Image 
            placeholder="blur" 
            blurDataURL={item.url} 
            src={item.url} 
            width={1000} 
            height={500}  
            objectFit='cover'
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" 
            style={{ borderRadius: '10px' }}  // Add some border radius for styling
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}
