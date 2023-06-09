import { Box, Image as ChakraImage } from "@chakra-ui/react";

/**
 * A component that displays an image.
 *
 * @param {string} url - The source of the image to display.
 * @returns {JSX.Element} - A JSX element representing the image.
 */
const Image = ({ url }) => {
  return (
    <Box className="message__wrapper">
      <ChakraImage className="message__img" src={url} alt="dalle generated" loading="lazy" />
    </Box>
  );
};

export default Image;
