import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Box } from 'theme-ui';
import HeaderElement from '../components/HeaderElement/HeaderElement';
// import { getUser } from '../redux/feature/authSlice';

// const ThemeSwitch = () => {
//   const [colorMode, setColorMode] = useColorMode();
//   // console.log(colorMode);

//   return (
//     <Switch
//       onClick={(e) => {
//         setColorMode(colorMode === 'default' ? 'dark' : 'default');
//       }}
//     />
//   );
// };
const TopBar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Flex
      variant="topBar"
      sx={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
        <HeaderElement icon="Streaks" count="3"/>
        <HeaderElement icon="Skills" count="6"/>
        <HeaderElement icon="Rank" count="#12"/>
        <HeaderElement icon="Rewards" count="#12"/>
        <HeaderElement icon="Notification" count="4"/>
    </Flex>
  );
};

export default TopBar;
