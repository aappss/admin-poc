import React from "react";
import { Box, Text } from "theme-ui";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Progress = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ border: "2px solid lightgrey", borderRadius: "20px", }} p={4} m={1} color="background" bg="white" >
                    <Text as='h1' sx={{ color: "black" }}>75%</Text>
                    <Text as='h3' sx={{ color: "black" }} >Progress</Text>
                    <Text mt={2} as='h6' sx={{ color: "black" }} >You are on track in attendance, assignment, submission and program grade</Text>
                    <Box sx={{ border: "1px solid lightgrey", borderRadius: "10px", }} pl={4} pr={4} m={1} mt={4} color="background" bg="lightgrey" >

                        <Text m={1} as='h6' sx={{ color: "black" }} >HeroVired certificate (on track)</Text>
                    </Box>
                </Box>
                <Box sx={{ border: "2px solid lightgrey", borderRadius: "20px", }} p={4} m={1} color="background" bg="white" >
                    <Text as='h1' sx={{ color: "black" }}>12</Text>
                    <Text as='h3' sx={{ color: "black" }} >Acquired Skills</Text>
                    <Text mt={2} as='h6' sx={{ color: "black" }} >12 out of 40 skills acquired by you</Text>
                    <Box sx={{ border: "1px solid lightgrey", borderRadius: "10px", }} pl={4} pr={4} m={1} mt={4} color="background" bg="lightgrey" >

                        <Text m={1} as='h6' sx={{ color: "black" }} >High five! You are on right track</Text>
                    </Box>
                </Box>
                <Box sx={{ border: "2px solid lightgrey", borderRadius: "20px", }} p={4} m={1} color="background" bg="white" >
                    <Text as='h1' sx={{ color: "black" }}>88%</Text>
                    <Text as='h3' sx={{ color: "black" }} >Average Grade</Text>
                    <Text mt={2} as='h6' sx={{ color: "black" }} >Average score of 144/200</Text>
                    <Box sx={{ border: "1px solid lightgrey", borderRadius: "10px", }} pl={4} pr={4} m={1} mt={4} color="background" bg="lightgrey" >

                        <Text m={1} as='h6' sx={{ color: "black" }} >HeroVired certificate (on track)</Text>
                    </Box>
                </Box>
            </div>
            <VerticalTimeline layout={'1-column-left'} lineColor={"linear-gradient(180deg, #D48DF8 0%, #D48DF8 77.85%, rgba(212, 141, 248, 0) 100%)"}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'white', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date=""
                    iconStyle={{ background: '#006FCB', color: '#fff', height: "20px", width: "20px", left: "10px", top: "10px" }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <Text as='h3' className="vertical-timeline-element-title" sx={{ color: "black" }}>Attendance</Text>
                            <Text as='h6' className="vertical-timeline-element-subtitle" sx={{ color: "black" }}>View details</Text>
                        </div>
                        <Box sx={{ border: "1px solid lightgrey", borderRadius: "10px", }} pl={4} pr={4} color="background" bg="lightgrey" >

                            <Text m={1} as='h6' sx={{ color: "black" }} >Oh shoot! You have low live class attendence. Attend more classes to get back in game.</Text>
                        </Box>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>

    );
}

export default Progress;