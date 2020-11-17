import React, {useEffect} from 'react'
import './styles.css'
import { headerData } from "./data";
import aos from 'aos'
import 'aos/dist/aos.css'

function Header() {
    useEffect(()=> {
        aos.init({ duration: 1500})
    }, [])
    return (
        <div className="header" data-aos="fade-left">
            <h3>{headerData.first}</h3>
            <h1>{headerData.heading}</h1>
            <p>{headerData.second}</p>
            <p>{headerData.third}</p>
        </div>
    )
}

export default Header
