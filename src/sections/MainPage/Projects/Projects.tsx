import "./Projects.css";
import Img1 from "../../../assets/Image/image 1.png";
import Img2 from "../../../assets/Image/image 2.png";
import Img3 from "../../../assets/Image/image 3.png";
const Projects = () => {
  return (
    <div className="projects-main-block">
      <div className="About-subblock">
        <h1 className="about-main-text"> Проекты </h1>
      </div>
      <div className="projects-about-block">
        <h1 className="projects-about">
          {" "}
          · Работал над сайтом строительной компании RDS GROUP
        </h1>
        <h1 className="projects-about">
          {" "}
          · Разработал сайт для ИИ стартапа StoryCraft AI для генерации видео
          текста
        </h1>
        <h1 className="projects-about">
          {" "}
          · Занял первое место на хакатоне создав сайт для определения и
          кластеризации лиц
        </h1>
      </div>
      <div className="project-examples">
        <div>
          <img className="project-examples-img" src={Img1} />
          <h1 className="project-examples-text">StoryCraft AI</h1>
          <h2 className="project-examples-subtext">Typescript  React  CSS</h2>
        </div>
        <div>
          <img className="project-examples-img" src={Img2} />
          <h1 className="project-examples-text">Hakaton First Place</h1>
          <h2 className="project-examples-subtext">Typescript  React  CSS</h2>
        </div>
        <div>
          <img className="project-examples-img" src={Img3} />
          <h1 className="project-examples-text">RDS GROUP</h1>
          <h2 className="project-examples-subtext">HTML CSS JS</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
