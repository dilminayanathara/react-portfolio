
import Navbar from "./components/Navabr/navbar";  
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Project from "./components/Projetcs/project";
import Contact from "./components/Contact/contact";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>

    </div>
  );
} 

export default App;
