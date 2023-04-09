import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Flex, Heading, Image } from 'theme-ui';
import useWindowSize from '../utils/useWindowSize';
// import ErrorImage from '../asset/icons/404.svg';
import ErrorImage from '../asset/icons/errorPage404.png';

const Error404 = () => {
  const { height } = useWindowSize();
  return (
    <Flex
      variant="appContent"
      sx={{
        height: height - 100 - 38,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '20px',
      }}
    >
      <Image sx={{height:"80%"}} src={ErrorImage} alt="Error"></Image>
      <Heading as="h2">404 NOT FOUND</Heading>
      <Button sx={{ marginTop: '25px', padding:"12px" }} as={Link} to="/">
        Return to Dashboard
      </Button>
    </Flex>
  );
};

export default Error404;
