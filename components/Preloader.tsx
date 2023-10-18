import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const Preloader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minH="100vh"
    bg="rgba(0, 0, 0, 1)"
    position="fixed"
    top="0"
    left="0"
    right="0"
    bottom="0"
    zIndex="9999"
  >
    <Spinner
      thickness="4px"
      speed="0.65s"
      // emptyColor="gray.200"
      color="pink.300"
      size="xl"
    />
  </Box>
);

export default Preloader;
