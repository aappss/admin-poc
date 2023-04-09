import React, { useState } from "react";
import { Box, Flex, Heading } from "theme-ui";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Calendar as CreateCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import CalendarCard from "./CalrndarCard";

export const Calendar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <Box sx={{
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
            <Flex py={2} px={2} sx={{ justifyContent: "space-between" }}>
                <Heading as="h5">Calendar</Heading>
                <Box>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">Day</Button>
                        <Button variant="secondary">Week</Button>
                        <Button variant="secondary">Month</Button>
                    </ButtonGroup>
                </Box>
            </Flex>
            <Flex px={2} py={2} sx={{ width: "100%", justifyContent: "space-between" }}>
                <Box sx={{ width: "25%", textAlign: "center" }}>
                    <CreateCalendar onChange={onChange} value={value} />
                    <Button className="mx-2 my-2">Create a new event</Button>
                </Box>
                <Box sx={{ width: "75%"}}>
                    <CalendarCard />
                    <CalendarCard />
                    <CalendarCard />
                </Box>
            </Flex>
        </Box>
    )
}

export default Calendar;