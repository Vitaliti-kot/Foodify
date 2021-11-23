import React, { useState } from "react";
import Favourites from "../Components/Ffavourit";
import NaviBar from '../Components/Nnavibar';

const Favourit = ()=>{
        return (
            <>
            <NaviBar isvisible={"success"}/>
            <div className="favouriteCards">
                <Favourites/>
                
            </div>
            </>
        )
    }

export {Favourit}