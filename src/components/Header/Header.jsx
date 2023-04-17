import cl from './Header.module.css';

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header_body}>
                <div className={cl.header_logo}>
                    <div className={cl.logo_ring}></div>
                    <h1 className={cl.logo_label}>PROJECT</h1>
                </div>
                <nav className={cl.header_navbar}>
                    <span>ГЛАВНАЯ</span>
                    <span>ПОСТЫ</span>
                    <span>ИНФОРМАЦИЯ</span>
                </nav>
            </div>
        </header>
    );
}

export default Header;