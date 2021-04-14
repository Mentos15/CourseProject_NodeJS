import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

import styles from "./styles";
import {Container} from "@material-ui/core";
import { Input } from '@material-ui/core';
import defaultTagsStyles from "./defaultTagsStyles";

const SearchPanel = () =>{
    const classes = styles();
    const defStyles = defaultTagsStyles;
    const [text,setText] = useState();
    return(
        <div style={defStyles.root}>
            <Container>
                <Input
                    className={classes.input}
                    id="standard-basic"
                    placeholder={'Поиск'}
                    disableUnderline={true}
                    onChange={(e)=>{console.log(e.target.value)}} />
            </Container>
        </div>
    )
};
export default SearchPanel;
