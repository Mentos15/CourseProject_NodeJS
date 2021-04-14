import React from 'react';
import Title from "../Title";
import CustomInput from '../Input';
import {Button, Container} from '@material-ui/core';


const Registration = () =>{
    return (
        <div>
            <Title title={'Регистрация'}/>
            <CustomInput
              placeholder={'Email'}
              type={'text'}
            />
            <CustomInput
              placeholder={'password'}
              type={'password'}
            />
            <Container>
              <Button variant="contained">Регистарция</Button>
            </Container>
        </div>
    )
}

export default Registration;
