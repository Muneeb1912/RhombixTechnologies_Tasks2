import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { Box, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext);
  return (
    <>
     <Navbar/>
     <Flex flexDirection={{base:'column',md:'row'}} alignItems={{md:'end'}} gap={8} mt={10}>
        <Image src={albumData.image} w={48} rounded={'rounded'} alt=''/>
        <Flex flexDirection={'column'}>
            <Text>Playlist</Text>
            <Text fontSize={{base:'5xl',md:'7xl'}} fontWeight={'bold'} >{albumData.name}</Text>
            <Text fontSize={'16px'}>{albumData.desc}</Text>
            <Text>
                <Image src={assets.spotify_logo} w={5} display={'inline-block'} alt=''/>
                <Box as='span' fontWeight={'bold'}>Spotify</Box>
                • 1,323,154 likes
                • <Box as='span' fontWeight={'bold'}>50 songs,</Box>
                about 2 hour 30 min
            </Text>
        </Flex>    
     </Flex> 
     <Grid templateColumns={{base:'repeat(3,1fr)',sm:'repeat(4,1fr)'}} fontSize={'16px'} mt={10} mb={4} pl={2} color={'#a7a7a7'}>
        <Text><Box as='span' fontWeight={'bold'}>#</Box>Title</Text>
        <Text>Album</Text>
        <Text display={{base:'none',sm:'block'}}>Date Added</Text>
        <Image src={assets.clock_icon} m={'auto'} w={4} alt=''/>
     </Grid>
     <Divider/>
     {
        songsData.map((item,idx)=>(
          <Grid onClick={()=>playWithId(item.id)} key={idx} templateColumns={{base:'repeat(3,1fr)',sm:'repeat(4,1fr)'}} fontSize={'16px'} gap={2} alignItems={'center'} p={2} color={'#a7a7a7'} _hover={{bgColor:'#ffffff2b'}}>
          <Text color={'white'}>
            <Box as='span' color={'#a7a7a7'} mr={4} fontWeight={'bold'}>{idx+1}</Box>
            <Image src={item.image} display={'inline'} w={5} mr={5}  alt=''/>
            {item.name}
            </Text>
          <Text>{albumData.name}</Text>
          <Text display={{base:'none',sm:'block'}}>5 days ago</Text>
          <Text textAlign={'center'}>{item.duration}</Text>
       </Grid>
        ))      
     }
    </>
  )
}

export default DisplayAlbum
