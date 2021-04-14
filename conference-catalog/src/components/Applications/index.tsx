import React from "react";
import {Button, Container, Typography} from "@material-ui/core";


const Applications = () =>{

  const renderApplications = () =>{
    return(
      <div>
        <Typography>Название конференции</Typography>
        <Button variant="contained">Принять</Button>
        <Button variant="contained" color='secondary'>Отклонить</Button>
      </div>
    )
  };

  return (
    <Container>

    </Container>
  )
};

export default Applications
