import './App.css';
import Contact from './components/Contact';
import DisplayPhoto from './components/DisplayPhoto';
import Footer from './components/Footer';
import Header from "./components/Header";
import Projects from './components/Projects';

function App() {
  const isMaintenance = true
  return (
    isMaintenance ? <div style={{"color":"#fff"}}>Site under maintenance</div> :
    <div className="app">
      <DisplayPhoto className="photo"/>
      <Header className="header"/>
      <Contact className="contact"/>
      <Projects className="projects"/>
      <Footer className="footer"/>
    </div>

  );
}

export default App;
