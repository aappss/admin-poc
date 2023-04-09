import React from "react";
import { Box, Flex, Image, Text, Label, Button } from 'theme-ui';
import assignment from '../../asset/icons/assignment.png';
import live_tv_completed from '../../asset/icons/live_tv_completed.png';
import live_tv from '../../asset/icons/live_tv.png';

const CalendarCard = () => {
    return (
        <Box  mb={2} sx={{ justifyContent: "space-between" }}>
            <Text px={5} as="h6" sx={{
                display: "inline",
                flex: "none",
                order: "0",
                flexGrow: "0"
            }}>10:00 am</Text>
            <Box sx={{
                boxSizing: "border-box",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "16",
                gap: "16",
                width: "82%",
                height: "127px",
                backgroundColor: "#F2F4FA",
                borderLeft: "4px solid #AF32DB",
                borderRadius: "5px"
            }}>
                <Flex sx={{ width: "100%", justifyContent: "space-between" }}>
                    <Box sx={{ padding: "16px" }}>
                        <Text as="h6" sx={{
                            display: "inline-flex", fontFamily: "General Sans",
                            // fo: "normal";
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "150%",
                        }}>
                            <Image mr={1} src={assignment} sx={{ color: "#AF32DB" }} />
                            <span style={{ color: '#AF32DB' }}>Assignment</span>
                        </Text>
                        <Text as="h6" sx={{
                            color: "#43474E",
                            fontSize: "14px",
                            lineHeight: "140%",
                            fontFamily: 'General Sans',
                            fontStyle: "normal",
                            fontWeight: "600"
                        }}>
                            Live Connect ( MIT SMCA) : 2nd August 2022
                            </Text>
                        <Text as="h6" sx={{
                            color: "#5A5F66",
                            fontSize: "14px",
                            lineHeight: "19px",
                            fontFamily: 'General Sans',
                            fontStyle: "normal",
                            fontWeight: "400"
                        }}>
                            MIT SMCA Foundations
                            </Text>
                    </Box>
                    <Box sx={{ padding: "16px", }}>
                        <Label mr={2} sx={{
                            display: "inline",
                            color: "#436828",
                            fontWeight: "500",
                            fontSize: "13px",
                            lineHeight: "150%",
                            textTransform: "uppercase"
                        }}>
                            Submitted
                        </Label>
                        <Button sx={{
                            display: "inline",
                            background: "transparent",
                            color: "#006FCB",
                            border: "1px solid #006FCB",
                            fontSize: "13px",
                            lineHeight: "150%",
                            fontWeight: "600",
                            borderRadius: "5px",
                            padding: "0px",
                            width: "124px",
                            height: "35px",

                        }}>
                            View submission
                        </Button>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default CalendarCard;