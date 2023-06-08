import { Box, Image } from "@chakra-ui/react";
import bot from "../assets/logo.ico";

const Thinking = () => {
  return (
    <Box className="message-w">
      <Box className="message__wrapper flex">
        <Box className="message__pic">
          <Image className="w-8 h-8" src={bot} alt="GPT" />
        </Box>
        <Box className="loader_cointainer">
          <Box className="loader">
            <Box className="inner one"></Box>
            <Box className="inner two"></Box>
            <Box className="inner three"></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Thinking;
