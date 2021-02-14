import React from 'react'
import './styles.css'
import { headerData, imageUrl } from "./data"


function Header() {

    return (
        <div className="header" >
            <div className="header-top">
                <div className="photo">
                    <img src={imageUrl} alt="me" loading="lazy"/>
                </div>
                <h3>{headerData.subHeading}</h3>
            </div>
            <h1>{headerData.heading}</h1>
            <p>{headerData.p1}</p>
            <p>{headerData.p2}</p>
            <p>{headerData.p3}</p>
        </div>
    )
}

export default Header
