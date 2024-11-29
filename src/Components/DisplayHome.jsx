import React from 'react'
import Navbar from './Navbar'
import { Box, Flex, Text } from '@chakra-ui/react'
import {albumsData , songsData} from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './Songitem'
const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <Box mb={4}>
        <Text fontSize={'2xl'}>Featured Charts</Text>
        <Flex overflow={'auto'}>

        {
          albumsData.map((item,idx)=>(<AlbumItem key={idx} name={item.name} desc={item.desc} image={item.image} id={item.id}/>))
        }
        </Flex>
      </Box>
      <Box mb={4}>
        <Text fontSize={'2xl'}>Today's biggest hits</Text>
        <Flex overflow={'auto'}>

        {
          songsData.map((item,idx)=>(<SongItem key={idx} name={item.name} desc={item.desc} image={item.image} id={item.id}/>))
        }
        </Flex>
      </Box>
    </>
  )
}

export default DisplayHome
