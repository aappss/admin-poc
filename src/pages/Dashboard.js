import React, { useState } from "react";
import { Box, Flex, Image, Text } from "theme-ui";
import useWindowSize from "../utils/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "../components/Tabs/tabs";
import Loader from "../components/Loader/Loader";
import waveHand from "../asset/icons/wavingHand.png";
import officeBoy from "../asset/icons/officeBoy.png";
import briefcase from "../asset/icons/briefcase.png";
import openBook from "../asset/icons/openBook.png";

export const Dashboard = () => {
  const { height, width } = useWindowSize();
  const { loading, userInfo } = useSelector((state) => state.auth);
  return (
    <Box variant="appContent" sx={{ height: height - 72 - 15 }}>
      <Flex sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ width: "100%", height: "100%" }} py={4}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Flex
                sx={{
                  height: "30%",
                  background:
                    "linear-gradient(150deg, rgba(255, 255, 255, 0.2) 10.74%, #D48DF8 200.36%)",
                  opacity: "0.8",
                  boxShadow: "1px 7px 16px 10px rgba(0, 0, 0, 0.05)",
                  backdropFilter: "blur(6px)",
                  //   alignItems:"center",
                  justifyContent: "space-between",
                }}
                mb={3}
              >
                <Box sx={{ width: "70%" }} p={3}>
                  <Image src={waveHand} />
                  <Text ml={1} variant="text.textBoldBlack">
                    Welcome back,{` ${userInfo?.firstName || "John"}` || 'John Doe'}
                  </Text>
                  <Text as="h6" mt={2}>
                    While you were away, you got{" "}
                    <mark style={{ color: "blue", background: "none" }}>
                      1 pending assignment
                    </mark>{" "}
                    and
                    <mark style={{ color: "blue", background: "none" }}>
                      2 upcoming live class
                    </mark>{" "}
                    this week!
                  </Text>
                </Box>
                <Flex sx={{ width: "30%", justifyContent:"center" }}>
                  <Image mt={6} sx={{height:"35%",width:"20%", position:"relative",left:'45px',zIndex:"-1"}} src={openBook} />
                  <Image sx={{ height: "100%" }} src={officeBoy} />
                  <Image mt={4} sx={{height:"30%",width:"15%", position:"relative",right:"30px"}} src={briefcase} />
                </Flex>
              </Flex>

              <Box mt={4}>
                <Tabs />
              </Box>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
