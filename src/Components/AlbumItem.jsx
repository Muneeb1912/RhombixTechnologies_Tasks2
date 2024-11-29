import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const AlbumItem = ({image,name,desc,id}) => {
    const navigate = useNavigate();
  return (
    <Box onClick={()=>navigate(`album/${id}`)} minW={'180px'} p={2} px={3} rounded={'rounded'} cursor={'pointer'} _hover={{bgColor:'#ffffff26'}}>
      <Image src={image} alt=''/>
      <Text rounded={'rounded'}>{name}</Text>
      <Text fontSize={'sm'} textColor={'slategray.200'}>{desc}</Text>
    </Box>
  )
}

export default AlbumItem
