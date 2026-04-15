import Header from "../sections/MainPage/Header/Header";
import Hero from "../sections/MainPage/Hero/Hero";
import About from "../sections/MainPage/About/About";


function MainPage() {
    return (
      <div className="main-page">
        <Header />
        <Hero />
        <About />
      </div>
    );
  }
  
  export default MainPage;