import Navigation from "Widgets/Navigation/ui/Navigation";
import LogoSVG from "./../assets/LogoSvg.svg";
import MenuIcon from "./../assets/MenuIcon.svg";
import { toggleVisibilty } from "App/store/visibiltyStore";

function Header() {
  return (
    <header className="header">
      <div className="header__navigation">
        <LogoSVG></LogoSVG>
        <Navigation></Navigation>
      </div>
      <MenuIcon
        className="header__menu"
        onClick={() => toggleVisibilty({ isVisibleMenu: true })}
      />
    </header>
  );
}

export default Header;
