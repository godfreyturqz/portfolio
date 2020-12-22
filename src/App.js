import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from "./components/Header"
import Projects from './components/Projects'
import Navbar from './components/Navbar'


function App() {
  const isMaintenance = false

  return (
    isMaintenance ? <div style={{"color":"#fff"}}>Site under maintenance</div> :
    <>
      <Navbar/>
      <div className="main">
        <Header className="header"/>
        <Contact className="contact"/>
        <Projects className="projects"/>
      </div>
      <Footer className="footer"/>
    </>
  )
}

export default App;
