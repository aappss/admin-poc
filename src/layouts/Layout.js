import React from "react";
import { Box, Flex } from "theme-ui";
import useWindowSize from "../utils/useWindowSize";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  const { height, width } = useWindowSize();
  return (
    <Box
      variant="appContainer"
      id="layoutContainer"
      sx={{ height, width: "100%" }}
    >
      {/* <Box id="smallScreen">Supports Only Larger Screen</Box> */}
      <Flex sx={{ width: "100%", height: "100%" }}>
        <Flex sx={{ height: "100%" }}>
          <SideBar />
        </Flex>
        <Flex sx={{ width: "100%", flexDirection: "column" }}>
          <Box>
            <TopBar />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Layout;
