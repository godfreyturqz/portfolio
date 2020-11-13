import './App.css';
import Contact from './components/Contact';
import DisplayPhoto from './components/DisplayPhoto';
import Header from "./components/Header";
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <DisplayPhoto className="dp"/>
      <Header className="header"/>
      <Contact className="contact"/>
      <Projects className="projects"/>
    </div>
  );
}

export default App;
