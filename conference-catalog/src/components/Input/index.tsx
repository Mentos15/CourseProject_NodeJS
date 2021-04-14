import React from "react";
import {Container, Input} from '@material-ui/core';
import {Props} from "./type";

const CustomInput = (props:Props) =>{
    const { placeholder, type } = props;
    return(
        <Container>
            <Input
                id="standard-basic"
                type={type}
                placeholder={placeholder}
                disableUnderline={true}
                onChange={(e)=>{console.log(e.target.value)}}
            />
        </Container>
    )
}

export default CustomInput;
