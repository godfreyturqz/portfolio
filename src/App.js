import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from "./components/Header"
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Tools from './components/Tools'


function App() {
  const isMaintenance = false

  return (
    isMaintenance ? <div style={{"color":"#fff"}}>Site under maintenance</div> :
    <>
      <Navbar/>
      <div className="main">
        <Header/>
        <Projects/>
        <Contact/>
        <Tools/>
      </div>
      <Footer className="footer"/>
    </>
  )
}

export default App;
