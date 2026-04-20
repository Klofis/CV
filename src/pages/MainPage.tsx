import Header from "../sections/MainPage/Header/Header";
import Hero from "../sections/MainPage/Hero/Hero";
import About from "../sections/MainPage/About/About";
import Projects from "../sections/MainPage/Projects/Projects";

function MainPage() {
    return (
      <div className="main-page">
        <Header />
        <Hero />
        <About />
        <Projects />
      </div>
    );
  }
  
  export default MainPage;