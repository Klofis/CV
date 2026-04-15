import "./Hero.css";
import Avatar from "/src/assets/Image/Avatar.jpg";

const Hero = () => {

  return (
    <div className="hero-main-block" id="hero"> 
      <div className="hero-text-block">
        <h1 className="hero-text1">Привет, я Ярик</h1>
        <h1 className="hero-text2">Frontend
        Разработчик </h1>
        <a href=""><h1 className="hero-text3">Связаться со мной</h1></a>
      </div>
      <img className="avatar" src={Avatar}/>
    </div>
  );
};

export default Hero;
