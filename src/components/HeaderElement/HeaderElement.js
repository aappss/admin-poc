import React, { useState, useEffect } from 'react';
import Streaks from '../../asset/icons/streaks.png';
import Skills from '../../asset/icons/skills.png';
import Rank from '../../asset/icons/rank.png';
import Rewards from '../../asset/icons/rewards.png';
import Notification from '../../asset/icons/notification.png';
import { Box, Flex, Image, Text } from 'theme-ui';

const HeaderElement = ({icon, count}) => {
    let iconObj = {
        'Streaks':Streaks,
        'Skills':Skills,
        'Rank':Rank,
        'Rewards':Rewards,
        'Notification':Notification,
    };

    return ( 
        <Flex mr={2} sx={{height:"80%", width:"10%"}}>
            <Image sx={{width:"20%"}} mr={1} src={iconObj[icon]}/>
            <Text sx={{minWidth:"10%"}} mr={1}>{count}</Text>
            <Text sx={{width:"50%"}}>{icon}</Text>
        </Flex>
     );
}
 
export default HeaderElement;