import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { assets } from "/src/assets/assets";
import { PlayerContext } from "../context/PlayerContext";
const Player = () => {
  const {
    track,
    seekBg,
    seekBar,
    playStatus,
    volume,
    handleVolumeChange,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <HStack
      justify={"space-between"}
      alignItems={"center"}
      h={"10%"}
      px={4}
      bgColor={"black"}
      color={"white"}
    >
      <Box display={{ base: "none", lg: "flex" }} alignItems={"center"} gap={4}>
        <Image src={track.image} w={12} />
        <Box>
          <Text fontSize={"sm"}>{track.name}</Text>
          <Text fontSize={"sm"}>{track.desc.slice(0, 12)}</Text>
        </Box>
      </Box>
      <VStack alignItems={"center"} gap={1} m={"auto"}>
        <Flex gap={4}>
          <Image src={assets.shuffle_icon} w={4} cursor={"pointer"} />
          <Image
            onClick={previous}
            src={assets.prev_icon}
            w={4}
            cursor={"pointer"}
          />
          {playStatus ? (
            <Image
              onClick={pause}
              src={assets.pause_icon}
              w={4}
              cursor={"pointer"}
            />
          ) : (
            <Image
              onClick={play}
              src={assets.play_icon}
              w={4}
              cursor={"pointer"}
            />
          )}
          <Image
            onClick={next}
            src={assets.next_icon}
            w={4}
            cursor={"pointer"}
          />
          <Image src={assets.loop_icon} w={4} cursor={"pointer"} />
        </Flex>
        <Flex alignItems={"center"} gap={5}>
          <Text fontSize={"sm"}>
            {time.currentTime.minute}:{time.currentTime.second}
          </Text>
          <Box
            ref={seekBg}
            onClick={seekSong}
            w={"60vw"}
            maxW={"500px"}
            bgColor={"gray.300"}
            rounded={"full"}
            cursor={"pointer"}
          >
            <Divider
              ref={seekBar}
              h={1}
              border={"none"}
              w={0}
              bgColor={"green.800"}
              rounded={"full"}
            />
          </Box>
          <Text fontSize={"sm"}>
            {time.totalTime.minute}:{time.totalTime.second}
          </Text>
        </Flex>
      </VStack>
      <Box
        display={{ base: "none", lg: "flex" }}
        alignItems={"center"}
        gap={2}
        opacity={75}
      >
        <Image src={assets.plays_icon} w={4} />
        <Image src={assets.mic_icon} w={4} />
        <Image src={assets.queue_icon} w={4} />
        <Image src={assets.speaker_icon} w={4} />
        <Image src={assets.volume_icon} w={4} />
        
        <Slider
        defaultValue={volume * 100}
        min={0}
        max={100}
        step={1}
        onChange={handleVolumeChange}
          w={20}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip hasArrow bg="blue.500" color="white">
            <SliderThumb />
          </Tooltip>
        </Slider>

        <Image src={assets.mini_player_icon} w={4} />
        <Image src={assets.zoom_icon} w={4} />
      </Box>
    </HStack>
  );
};

export default Player;
