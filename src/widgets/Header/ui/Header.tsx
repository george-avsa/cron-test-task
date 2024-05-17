import Navigation from 'Widgets/Navigation/ui/Navigation';
import LogoSVG from './../assets/LogoSvg.svg';
import MenuIcon from './../assets/MenuIcon.svg';

function Header() {
    return (
        <header className="header">
            <div className='header__navigation'>
                <LogoSVG></LogoSVG>
                <Navigation></Navigation>
            </div>
            <MenuIcon className='header__menu' />
        </header>
    );
}

export default Header;