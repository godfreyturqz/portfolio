import Container from '../Container'
import './header.css'
import { imageUrl } from "./data"


function Header() {
    return (
        <Container>
            <div className="header">
                <div className="header-top">
                    <div className="photo">
                        <img src={imageUrl} alt="me" loading="lazy"/>
                    </div>
                    <h3>Electrical Engineer | Software Developer</h3>
                </div>
                <h1>Hi! I'm Godfrey Turqueza</h1>
                <p>I'm an Electrical Engineer and a Dev hobbyist. Interested in software development, machine learning, blockchain, automation and engineering.</p>
                <br/>
                <p>My main programming language is JavaScript/ TypeScript. Also familiar with PHP and Python.</p>
                <br/>
            </div>
        </Container>
    )
}

export default Header
