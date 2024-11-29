import { Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <HStack alignItems={'center'} justifyContent={'space-between'} w={'full'} fontWeight={'semibold'}>
        <Flex alignItems={'center'} gap={2}>
            <Image onClick={()=>navigate(-1)} src={assets.arrow_left} w={8} bgColor={'black'} p={2} rounded={'2xl'} cursor={'pointer'} alt=''/>
            <Image onClick={()=>navigate(1)} src={assets.arrow_right} w={8} bgColor={'black'} p={2} rounded={'2xl'} cursor={'pointer'} alt=''/>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
            <Text fontSize={'15px'} bgColor={'white'} color={'black'} px={4} py={1} rounded={'2xl'} display={{base:'none',md:'block'}} cursor={'pointer'}>Explore Premium</Text>
            <Text fontSize={'15px'} bgColor={'black'} px={3} py={1} rounded={'2xl'} cursor={'pointer'}>Install App</Text>
            <Text bgColor={'purple.500'} color={'black'} w={7} h={7} display={'flex'} alignItems={'center'} justifyContent={'center'} rounded={'full'}>M</Text>
        </Flex>
      </HStack>
      <Flex alignItems={'center'} gap={2} mt={4}>
        <Text bgColor={'white'} color={'black'} px={4} py={1} rounded={'2xl'} cursor={'pointer'}>All</Text>
        <Text bgColor={'black'} px={4} py={1} rounded={'2xl'} cursor={'pointer'}>Music</Text>
        <Text bgColor={'black'} px={4} py={1} rounded={'2xl'} cursor={'pointer'}>Podcasts</Text>
      </Flex>
    </>
  )
}

export default Navbar
