import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../components/Button";
import {Flex, Heading, Image } from "theme-ui";
import useWindowSize from "../utils/useWindowSize";
import internalError from '../asset/icons/internalServerErrorBro.png';

const Error500 = () => {
  const { height } = useWindowSize();
  return (
    <Flex
      variant="appContent"
      sx={{
        height: height - 100 - 38,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image sx={{height:"90%"}} src={internalError} alt="Error"></Image>
      <Heading as="h2">Internal Server Error Occured</Heading>
      {/* <Button sx={{ marginTop: '25px' }} as={Link} to="/">
        Return to Dashboard
      </Button> */}
    </Flex>
  );
};

export default Error500;
