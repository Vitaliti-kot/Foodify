import React from "react";
import Rrecipe from "../Components/Rrecipe";
import NaviBar from '../Components/Nnavibar';

const Home = ()=>{
    return(
        <>
        <NaviBar isvisible={"No-displayBtn"}/>
        <Rrecipe/>
        </>
    )
}

export {Home}