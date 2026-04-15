import "./Header.css";
import GitHubSvg from "/src/assets/Svg/GitHub.svg";
const Header = () => {
  return (
    <header>
      <h1 className="header-title">Синевич Ярослав</h1>
      <div className="hyprlink-wrapper">
        <a href="#"><h1 className="header-hyprlink">Home</h1></a>
        <a href="#"><h1 className="header-hyprlink">About</h1></a>
        <a href="#"><h1 className="header-hyprlink">Works</h1></a>
      </div>
      <img src={GitHubSvg} className="git-hub-svg"></img>
    </header>
  ); 
};

export default Header;
//rfce, сторы(хранение компонентов),запросы на бэк
//доп компоненты компонентам,коменты,табуляция и пробелы,кебаб
