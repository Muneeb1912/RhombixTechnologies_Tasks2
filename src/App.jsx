import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const {audioRef,track} = useContext(PlayerContext);
  return (
    <Box h={'100vh'} bgColor={'black'}>
      <Flex h={'90%'} >
        <Sidebar/>
        <Display/>
      </Flex>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </Box>
  )
}

export default App
