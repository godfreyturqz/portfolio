import './tools.css'
import Container from '../Container'
import { iconUrlLanguage, iconUrlFramework } from './data'

const Tools = () => {
    return (
        <Container>
            <h1>Web Development Tools</h1>
            <br/>
            <h2 className="tools-category">Languages</h2>
            { iconUrlLanguage.map( data => <Icons {...data}/> ) }
            <h2 className="tools-category">Frameworks and other technologies</h2>
            { iconUrlFramework.map( data => <Icons {...data}/> ) }
        </Container>
    )
}

const Icons = (props) => {
    return (
        <div className="container-icon">
            <div className="icon">
                <img src={props.url} alt="icon" loading="lazy"/>
            </div>
            <p>{props.description}</p>
        </div>
    )
}


export default Tools
