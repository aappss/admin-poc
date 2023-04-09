import React from 'react';
import { Box, Flex, Label, Switch } from 'theme-ui'

// import PropTypes from 'prop-types';
import { useColorMode } from 'theme-ui'

/** App  ToggleSwitch Design */
const ToggleSwitch = () => {
    const [colorMode, setColorMode] = useColorMode()

    return (
        <Flex
            sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2,
            }}>
            <Box>
                <Switch id="theme-change" onClick={(e) => {
                    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
                }} />
            </Box>
        </Flex>
    );
}




// ToggleSwitch.propTypes = {

// };
export default ToggleSwitch;

