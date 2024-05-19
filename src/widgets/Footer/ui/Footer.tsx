import RoundedLink from "Shared/RoundedLink/ui/RoundedLink";
import TelegramIcon from "./../assets/telegram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__partnership">
        <p className="footer__title">Стать клиентом или партнером!</p>
        <div className="footer__line"></div>
        <a href="mailto:george.avsa@yandex.ru" className="footer__email">
          george.avsa@yandex.ru
        </a>
      </div>
      <RoundedLink href="https://t.me/georgeavsa" target="_blank">
        Связаться со мной
      </RoundedLink>

      <address className="footer__adress">
        <span>
          <del>Россия, Москва</del>Веспрем
        </span>
        <a href="#">
          <del>+79773263306</del>+36707187203
        </a>
      </address>

      <div className="footer__telegram">
        <span>Связаться через</span>
        <a href="https://t.me/georgeavsa" target="_blank" rel="noreferrer">
          <TelegramIcon></TelegramIcon>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
