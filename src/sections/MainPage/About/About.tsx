import "./About.css";

const About = () => {
  return (
    <div className="about-main-block">
      <div className="About-subblock">
        <h1 className="about-main-text"> Обо мне </h1>
      </div>
      <h1 className="about-text">
        Меня зовут Синевич Ярослав, я Frontend Разработчик, обучаюсь в ВГУ имени
        Машерова. Знаю HTML, Figma, CSS, JS, TS, React, GIT, и немного React
        Native.
      </h1>
      <div className="about-skills-block">
        <h1 className="about-skills">Front-End</h1>
        <h1 className="about-skills">React</h1> 
        <h1 className="about-skills">Typescript</h1>
      </div>
    </div>
  );
};

export default About;
