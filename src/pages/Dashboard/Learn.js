import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Box, Flex, Text, Image, Progress, Avatar } from "theme-ui";
import Button from "../../components/Button/Button";
import "react-vertical-timeline-component/style.min.css";
import learn from '../../asset/icons/learn.png';
import profileImg from '../../asset/icons/profileImg.jpeg';
import triangle from '../../asset/icons/polygonTraingle.png';
import tickMark from '../../asset/icons/tickMark.png';
import { useDispatch, useSelector } from "react-redux";
import { getLearningPath } from '../../redux/feature/learningPathSlice';
import addIcon from '../../asset/icons/addIcon.png';
import TimeLineCard from "../../components/TimelineCard/TimeLineCard";
import Calendar from "../../components/Calendar/Calendar";

export const Learn = () => {
  const { loading, userInfo } = useSelector((state) => state.auth);
  let token = null;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (userInfo) {
  //     token = JSON.parse(userInfo.user_token_local_mobile).token;
  //     dispatch(getLearningPath(token));
  //   }
  // }, [userInfo]);


  // useEffect(() => {
  //   dispatch(getLearningPath(userToken.token));
  // },[]);
  return (
    <Box sx={{ height: "80vh" }}>
      <Box px={2} py={2} sx={{
            boxSizing: "border-box",
            left: "0%",
            right: "0%",
            top: "0%",
            bottom: "0%",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 6.36%, rgba(255, 255, 255, 0.2) 118.74%)",
            opacity: "0.8",
            boxShadow: "0px 7px 16px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "12px"
        }}>
        <Flex sx={{ height: "30%", width: "100%", }}>
          <Flex sx={{ width: "70%", justifyContent: "flex-start" }}>
            <Box sx={{ width: "20%" }}>
              <Image src={learn} />
            </Box>
            <Box ml={2} mt={1} sx={{ width: "60%" }}>
              <Text sx={{ fontWeight: "700", fontSize: "18px", wordWrap: "break-word" }}>
                Certificate Program in Financial Analysis, Valuation & Risk Management
                <Text variant="text.textRegularLight">( Batch 12345678 )</Text>
              </Text>
              <Flex mt={2} sx={{ alignItems: "center" }}>
                <Progress sx={{ width: "10%" }} max={1} value={1 / 2} />
                <Text ml={3} variant="text.textRegularLight">51% completed</Text>
                <Text ml={3} variant="text.textRegularLight">77% Attendance</Text>
              </Flex>
            </Box>
          </Flex>
          <Flex sx={{ width: "30%", alignItems: "flex-start", justifyContent: "space-evenly" }}>
            <Button variant="buttons.secondary" sx={{ border: "1px solid #006FCB", color: "#006FCB", borderRadius: "10px" }}>
              <i class="fa-regular fa-magnifying-glass"></i>
              <Text ml={1}>Search</Text>
            </Button>
            <Button sx={{ borderRadius: "10px" }}>Continue Learning</Button>
          </Flex>
        </Flex>

        <Flex>
          <Box sx={{ width: "5%", fontSize: "20px" }} mt={5}>
            <Avatar size={100} src={profileImg} alt="I" />
            {/* <Image sx={{position:"absolute",left:"155px", top:"315px",zIndex:"-1", borderRadius:"10px"}} src={triangle} /> */}
          </Box>

          <Box sx={{ width: "60%", minWidth:"60%", minHeight:"50%" }}>
            <VerticalTimeline
              layout={"1-column-left"}
              lineColor={
                "linear-gradient(180deg, #D48DF8 0%, #D48DF8 77.85%, rgba(212, 141, 248, 0) 100%)"
              }
              animate={true}
            >
              <Text mb={2} ml={5} sx={{ color: "#73777F", cursor: "pointer" }} as="h6"><Image src={addIcon} /> 2 more course</Text>
              <Box mb={2} sx={{width: "75%"}}>
                <TimeLineCard icon="tick" title="COMPLETED" content="MIT Probability Unit 0, Unit 1, Unit 2, Unit 3, Unit 4, Unit 5" />
              </Box>
              <Box mb={2} sx={{width: "75%"}}>
                <TimeLineCard icon="play" title="ONGOING" content="MIT Probability Unit 0, Unit 1, Unit 2, Unit 3, Unit 4, Unit 5" />
              </Box>
              <Box mb={3} sx={{width: "75%"}}>
                <TimeLineCard icon="lock" title="LOCKED" content="MIT Probability Unit 0, Unit 1, Unit 2, Unit 3, Unit 4, Unit 5" />
              </Box>
              <Text mb={3} ml={5} sx={{ color: "#006FCB", cursor: "pointer" }} as="h5"><Image src={addIcon} /> 4 more course</Text>
            </VerticalTimeline>
          </Box>
        </Flex>
      </Box>
      <Box my={3} sx={{ height: "80vh" }}>
        <Calendar />
      </Box>
    </Box>
  );
};

export default Learn;
