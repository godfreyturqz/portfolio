import React from 'react'
import dp from "./dp.png";
import './styles.css'

function DisplayPhoto() {
    return (
        <div className="photo">
            <img src={dp} alt="me"/>
        </div>
    )
}

export default DisplayPhoto
