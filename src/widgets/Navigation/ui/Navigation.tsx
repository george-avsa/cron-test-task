type NavigationLink = {
    text: string,
    url: string,
    isActive: boolean,
    target?: '_blank',
}

export const navigationLinks: NavigationLink[] = [
    {text: 'Кейсы', url: '#', isActive: true},
    {text: 'Компания', url: '#', isActive: false},
    {text: 'Услуги', url: '#', isActive: false},
    {text: 'Контакты', url: '#', isActive: false},
];    

function Navigation() {
    return (
        <nav className="navigation">
            {navigationLinks.map(navigationLink => {
                const classNames = ['navigation__link'];

                navigationLink.isActive && classNames.push('navigation__link--active');                

                return (
                    <a 
                        key={navigationLink.text} 
                        className={classNames.join(' ')}
                        target={navigationLink.target}
                        href={navigationLink.url} 
                    >
                        {navigationLink.text}
                    </a>
                );
            })}
        </nav>
    );
}

export default Navigation;