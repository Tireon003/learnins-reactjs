import cl from './Header.module.css';

import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header_body}>
                <div className={cl.header_logo}>
                    <div className={cl.logo_ring}></div>
                    <h1 className={cl.logo_label}>PROJECT</h1>
                </div>
                <nav className={cl.header_navbar}>
                    <Link to='/home'>Главная</Link>
                    <Link to='/posts'>Посты</Link>
                    <Link to='/info'>Информация</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;