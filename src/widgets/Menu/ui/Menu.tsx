import { $visibiltyStore, toggleVisibilty } from "App/store/visibiltyStore";
import Animation from "Features/Animation/Animation";
import RoundedLink from "Shared/RoundedLink/ui/RoundedLink";
import { navigationLinks } from "Widgets/Navigation/ui/Navigation";
import { useUnit } from "effector-react";
import CrossIcon from "./../assets/CrossIcon.svg";
import LogoBig from "./../assets/LogoBig.svg";

function Menu() {
  const isMenuVisible = useUnit($visibiltyStore).isVisibleMenu;

  return (
    <Animation baseClass="menu" conditionOnShow={isMenuVisible} duration={500}>
      <div className="menu__left">
        <LogoBig />
        <div className="menu__navigation">
          {navigationLinks.map((navagationLink) => (
            <a
              key={navagationLink.text}
              href={navagationLink.url}
              target={navagationLink.target}
              className="menu__navigation-link"
            >
              {navagationLink.text}
            </a>
          ))}
        </div>
        <a href="mailto:george.avsa@yandex.ru" className="menu__contact-email">
          george.avsa@yandex.ru
        </a>
      </div>
      <div className="menu__right">
        <CrossIcon
          className="menu__cross"
          onClick={() => toggleVisibilty({ isVisibleMenu: false })}
        />
        <a href="https://t.me/georgeavsa" className="menu__telegram-link">
          Telegram
        </a>
        <RoundedLink href="https://t.me/georgeavsa" target="_blank">
          Связаться со мной
        </RoundedLink>
      </div>
    </Animation>
  );
}

export default Menu;
