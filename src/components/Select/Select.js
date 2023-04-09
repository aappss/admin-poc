import React from "react";
import { Select as DropDown, Box } from 'theme-ui'

export const Select = (props) => {
    const selectData = props.selectData;
    return (
        <DropDown
            sx={{background: "#ECF0F7", padding:"6px", margin:"0px"}}
            >
            {
                selectData.map((item, key) => {
                    return(
                        <option key={key}>{item}</option>
                    )
                })
            }
        </DropDown>
    )
}

export default Select;