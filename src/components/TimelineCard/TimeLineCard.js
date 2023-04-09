import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import { Box, Flex, Image, Text } from 'theme-ui';
import tickIcon from '../../asset/icons/tickMark.png';
import playIcon from '../../asset/icons/play_arrow.png';
import tickMark from '../../asset/icons/tickMark.png';
import lock from '../../asset/icons/lock.png';

const TimeLineCard = ({ icon ,title, content }) => {
    let titleColor = (title ==='COMPLETED') ? '#436828' : (title ==='ONGOING') ? '#5A57DD' : '#43474E';    
    let titleIcon = (title ==='COMPLETED') ? tickMark : (title ==='ONGOING') ? playIcon : lock;
    return ( 
        <Box>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#ECF0F7', height:"110px", borderRadius:"10px", borderColor: "linear-gradient(90deg, #436828 100%, #436828 60%)" }}
                iconStyle={{
                    background: "white",
                    border:"2px solid blue",
                    color: "#fff",
                    height: "12px",
                    width: "12px",
                    left: "14px",
                    top: "14px",
                    boxShadow: "none",
                }}
                >
                <Text as="h6" className="vertical-timeline-element-title" sx={{display: "inline-flex"}}>
                    <Image mr={1} src={titleIcon} />
                    <span style={{color: titleColor}}>{title}</span>
                </Text>
                <Text as='p'>{content}</Text>
            </VerticalTimelineElement>
        </Box>
     );
}
 
export default TimeLineCard;