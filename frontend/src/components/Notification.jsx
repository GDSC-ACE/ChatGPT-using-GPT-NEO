import { Box } from "@chakra-ui/react";

const Notification = ({ message }) => {
  return (
    <Box className={`notification_error`} role="alert">
      <Box as="span" display="block" whiteSpace="normal">
        {message}
      </Box>
    </Box>
  );
};

export default Notification;
