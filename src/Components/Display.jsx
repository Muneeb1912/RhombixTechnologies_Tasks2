import { Box } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const DisplayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(()=>{
    if(isAlbum){
       DisplayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
      }
      else{
      DisplayRef.current.style.background = `#121212`
    }
  })
  
  
  return (
    <Box ref={DisplayRef} w={{base:'100%',lg:'75%'}} ml={{lg:'0px'}} m={2} px={6} pt={4} rounded={'rounded'} bgColor={'#121212'} color={'white'} overflow={'auto'} >
        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum/>}/>
        </Routes>
    </Box>
  )
}

export default Display
