import React, { useState } from "react";
import { useTabState, Tab, TabList, TabPanel } from "reakit";
import { Box, Button, Text, Flex, Image } from "theme-ui";
import { colors } from "../../theme";
import Select from "../Select/Select";
import Learn from "../../pages/Dashboard/Learn";
import Progress from "../../pages/Dashboard/Progress";
import Jobs from "../../pages/Dashboard/Jobs";

export const Tabs = () => {
  const tab = useTabState();
  const selectData = [
    "Program Advance Certificate Program",
    "Program 1",
    "Program 2",
  ];
  return (
    <Box>
      <Flex
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TabList {...tab} aria-label="Dashboard Tabs">
          <Flex sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{
                position: "relative",
                borderBottom:
                  tab.selectedId === "tab1"
                    ? `4px solid ${colors.blue.secondary}`
                    : "none",

                pb: 1,
              }}
            >
              <Tab as={Button} variant="tab" {...tab} id="tab1">
                <Text
                  variant={
                    tab.selectedId === "tab1"
                      ? "textMediumSecondaryBlue"
                      : "textRegularLight"
                  }
                >
                  Learn
                </Text>
              </Tab>
            </Box>
            <Box
              sx={{
                position: "relative",

                borderBottom:
                  tab.selectedId === "tab2"
                    ? `4px solid ${colors.blue.secondary}`
                    : "none",

                pb: 1,
              }}
              ml={4}
            >
              <Tab as={Button} variant="tab" {...tab} id="tab2">
                <Text
                  variant={
                    tab.selectedId === "tab2"
                      ? "textMediumSecondaryBlue"
                      : "textRegularLight"
                  }
                >
                  Progress
                </Text>
              </Tab>
            </Box>
            <Box
              sx={{
                position: "relative",
                borderBottom:
                  tab.selectedId === "tab3"
                    ? `4px solid ${colors.blue.secondary}`
                    : "none",

                pb: 1,
              }}
              ml={4}
            >
              <Tab as={Button} variant="tab" {...tab} id="tab3">
                <Text
                  variant={
                    tab.selectedId === "tab3"
                      ? "textMediumSecondaryBlue"
                      : "textRegularLight"
                  }
                >
                  Jobs
                </Text>
              </Tab>
            </Box>
          </Flex>
        </TabList>
        <Box
          sx={{
            height: "10%",
            width: "30%",
          }}
        >
          <Select selectData={selectData} />
        </Box>
      </Flex>
      <Box mt={4}>
        <TabPanel {...tab}>
          <Learn />
        </TabPanel>
        <TabPanel {...tab}>
          <Progress />
        </TabPanel>
        <TabPanel {...tab}>
          <Jobs />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Tabs;
