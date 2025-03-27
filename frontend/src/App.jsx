import "./App.css";
import Navigation from "./components/Navigation.jsx";
import StartInfo from "./components/StartInfo.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="montserrat px-52 pt-14">
      <header>
        <Navigation />
      </header>
      <main>
        <StartInfo />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
