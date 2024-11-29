import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {assets} from '/src/assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <Box flexDirection={'column'} display={{base:'none',lg:'flex'}} gap={2} w={'25%'} h={'100%'} p={2} color={'white'}>
    <VStack h={'15%'} w={'full'} justify={'space-around'} alignItems={'start'} borderRadius={'md'} bgColor={'#121212'}>
        <HStack onClick={()=>navigate('/')} gap={3} pl={8} cursor={'pointer'}> 
            <Image src={assets.home_icon} w={6} alt='home_icon'/>
            <Text fontSize={'sm'} fontWeight={'bold'}>Home</Text>
        </HStack>
        <HStack gap={3} pl={8} cursor={'pointer'}> 
            <Image src={assets.search_icon} w={6} alt='search_icon'/>
            <Text fontSize={'sm'} fontWeight={'bold'}>Search</Text>
        </HStack>

    </VStack>
    <Box bgColor={'#121212'} h={'85%'} borderRadius={'md'} w={'full'}>
        <HStack justify={'space-between'} p={4}>
            <HStack gap={3}>
            <Image src={assets.stack_icon} w={8} alt='stack_icon'/>
            <Text fontSize={'sm'} fontWeight={'semibold'}>Your Library</Text>
            </HStack>
            <HStack gap={3}>
            <Image src={assets.arrow_icon} w={5} alt='arrow_icon'/>
            <Image src={assets.plus_icon} w={5} alt='plus_icon'/>
            </HStack>
        </HStack>
        <VStack bgColor={'#242424'} justify={'start'} align={'start'} p={4} fontWeight={'semibold'} pl={4}>
            <Text>Create your first playlist</Text>
            <Text fontSize={'sm'} fontWeight={'light'}>it's easy we will help you</Text>
            <Button rounded={'full'} mt={4}>Create Playlist</Button>
        </VStack>
        <VStack bgColor={'#242424'} justify={'start'} align={'start'} p={4} fontWeight={'semibold'} pl={4} mt={4}>
            <Text>Let's findsome podcasts to follow</Text>
            <Text fontSize={'sm'} fontWeight={'light'}>we will keep you update on new episodes</Text>
            <Button rounded={'full'} mt={4}>Browse podcasts</Button>
        </VStack>

    </Box>
      
    </Box>
  )
}

export default Sidebar
