import "./app.scss";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Nikko from "./components/Nikko/Nikko"
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Cursor from "./components/Cursor/Cursor"
import { Services } from "./components/Services/Services";

const App = () => {
  return (
    <div> 
      <Cursor />
      <section id="Homepage"> 
        <Navbar/>
        <Nikko />
      </section>
      <section id="Services"> <Parallax type ="services"/> </section>
      <section > <Services /> </section>
      <section id="Portfolio"> <Parallax  type ="portfolio"/></section>
      <Portfolio />
      <section id="Contact"> 
        <Contact />
      </section>
    </div>
  );
};

export default App;

