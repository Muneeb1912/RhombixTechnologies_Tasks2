import { Box, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({image,name,desc,id}) => {
  const {playWithId} = useContext(PlayerContext);

  return (
    <Box onClick={()=>playWithId(id)} minW={'180px'} p={2} px={3} rounded={'rounded'} cursor={'pointer'} _hover={{bgColor:'#ffffff26'}}>
      <Image src={image} alt=''/>
      <Text fontWeight={'bold'} rounded={'rounded'} mt={2} mb={1}>{name}</Text>
      <Text fontSize={'sm'} textColor={'slategray.200'}>{desc}</Text>
    </Box>
  )
}

export default SongItem
