import { navigationLinks } from 'Widgets/Navigation/ui/Navigation';
import LogoBig from './../assets/LogoBig.svg';
import CrossIcon from './../assets/CrossIcon.svg';
import RoundedLink from 'Shared/RoundedLink/ui/RoundedLink';


function Menu() {
    return (
        <div className="menu">
            <div className="menu__left">
                <LogoBig />
                <div className='menu__navigation'>
                    {navigationLinks.map(navagationLink => (
                        <a 
                            key={navagationLink.text} 
                            href={navagationLink.url} 
                            target={navagationLink.target} 
                            className='menu__navigation-link'
                        >{navagationLink.text}</a>
                    ))}
                </div>
                <a href="mailto:george.avsa@yandex.ru" className='menu__contact-email'>
                    george.avsa@yandex.ru
                </a>
            </div>
            <div className="menu__right">
                <CrossIcon className='menu__cross' />
                <a href="#" className='menu__telegram-link'>
                    Telegram
                </a>
                <RoundedLink></RoundedLink>
            </div>
        </div>
    );
}

export default Menu;