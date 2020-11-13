import React from 'react'
import './styles.css'
import { headerData } from "./data";

function Header() {
    return (
        <div className="header">
            <h1>{headerData.heading}</h1>
            <p>{headerData.first}</p>
            <p>{headerData.second}</p>
            <p>{headerData.third}</p>
        </div>
    )
}

export default Header
