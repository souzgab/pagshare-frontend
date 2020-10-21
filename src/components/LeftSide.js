import React from 'react';
import {Image} from "react-bootstrap";
import imgSvg from "../assets/Blobs.svg";

const LeftSide = () => {
    return (
        <div>
           <Image src={imgSvg} thumbnail style={{border:"none"}} /> 
        </div>
    )
}

export default LeftSide;