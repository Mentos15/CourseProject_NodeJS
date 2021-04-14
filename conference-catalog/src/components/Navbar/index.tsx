import React, {FC} from 'react'
import Button from "@material-ui/core/Button";
import {AppBar, Container, Toolbar, Box,Typography} from "@material-ui/core";


import styles from "./styles";


 const Navbar = () =>{
    const classes = styles();
    return(
        <AppBar className={classes.navBar} >
            <Container >
                <Toolbar className={classes.toolBer}>
                    <Box>
                        <Typography className={classes.homeLink} variant={'h6'}>Conferences</Typography>
                    </Box>
                    <Box>
                        <Button className={classes.navBarBtn}>Регистрация</Button>
                        <Button className={classes.navBarBtn}>Авторизация</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Navbar;
