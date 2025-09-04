const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <h3>SUA LOGO AQUI</h3>
                </div>
                
                <nav className="menu-content" >
                    <div className="menu-item">
                        <a href="#service">Serviços</a>
                    </div>
                    <div className="menu-item">
                        <a href="#benefits">Benefícios</a>
                    </div>
                    <div className="menu-item">
                        <a href="#feedback">Depoimentos</a>
                    </div>
                    <div className="menu-item">
                        <a href="#contact">Contato</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;