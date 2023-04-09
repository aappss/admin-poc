import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Text, Image } from "theme-ui";
import { useDispatch, useSelector } from "react-redux";
// import { toggleHover } from "../redux/feature/navSlice";
import Dashboard from "../asset/icons/dashboard.svg";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch";
// import Finance from '../asset/icons/finance.svg';
// import Report from '../asset/icons/report.svg';
// import Chart from '../asset/icons/chart.svg';
// import Team from '../asset/icons/team.svg';

import heroviredLogo from '../asset/icons/heroViredLogoExpanded.svg';
import heroviredLogoCollapse from '../asset/icons/heroViredLogoCollapse.svg';


const SideBar = () => {
  const [hover, setHover] = useState(false)
  const { userInfo } = useSelector((state) => state.auth);

  const Nav = [
    {
      link: "/",
      image: Dashboard,
      title: "Dashboard",
    },
    // {
    //   link: '/finance',
    //   image: Finance,
    //   title: 'Finance',
    // },
    // {
    //   link: '/report',
    //   image: Report,
    //   title: 'Report',
    // },
    // {
    //   link: '/chart',
    //   image: Chart,
    //   title: 'Chart',
    // },
    // {
    //   link: '/team',
    //   image: Team,
    //   title: 'Team',
    // },
  ];

  return (
    <Flex variant="nav" sx={{ flexDirection: "column", height: "100%" }} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <Box sx={{ width: "47.03px", height: "42.77px" }} mt={2} mx={2}>
        {hover ? <Image sx={{ maxWidth: "120px", height: "auto" }} src={heroviredLogo} alt="vired-logo" /> : <Image src={heroviredLogoCollapse} alt="vired-logo" />}
      </Box>
      <Box mt={3} variant="navContent">
        {Nav.map(({ link, image, title }, i) => {
          return (
            <Flex key={i} sx={{ width: "100%" }} my={3} px={3}>
              <Flex
                as={Link}
                to={link}
                sx={{
                  alignItems: "center",
                  // justifyContent: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                <Image
                  sx={{ alignSelf: "center" }}
                  src={image}
                  alt="dashboard"
                  width={20}
                  height={20}
                />
                <Text className="title" ml={2}>
                  {title}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Box>
      <Box sx={{position: "absolute", bottom:"6"}} mt={2} mx={2}>
        <ToggleSwitch />
      </Box>
      <Box sx={{position: "absolute", bottom:"2"}} mt={2} mx={2}>
          
          {userInfo?.profileImage ? (
            <Image
              sx={{
                width: '43px',
                height: '43px',
                borderRadius: '50%',
              }}
              src={userInfo?.profileImage}
            />
            ) : (
            <Flex
              sx={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text sx={{ fontSize: '20px', color: 'white' }}>
                {`${userInfo?.firstName || "J"
                  ?.charAt(0)
                  .toUpperCase()}${userInfo?.lastName || "D"
                  ?.charAt(0)
                  .toUpperCase()}`}
              </Text>
            </Flex>
          )}
          {/* <Image src={Profile} alt="Profile" /> */}
          
        </Box>
    </Flex>
  );
};

export default SideBar;
