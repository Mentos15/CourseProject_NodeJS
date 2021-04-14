import React,{useState} from 'react';

import Conference from "../Conference";
import Registration from "../Registration";

const AllConferences = ()=>{

    return(
        <div>
            <Conference name={'Qwer'} time={'15.10.2000'}/>
            <Registration/>
        </div>
    )
};

export default AllConferences;
