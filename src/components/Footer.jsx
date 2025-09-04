import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="info">
                    <h5>Contato</h5>
                    <ul className="list">
                        <li><a href="tel:+5574999883389">(74) 99988-3389</a></li>
                        <li><a href="mailto:contabilidade@gmail.com">contabilidade@gmail.com</a></li>
                        <li><a href="https://maps.app.goo.gl/Se9mY7tbHyRf21BX6" target="_blank"> Rua onde Judas perdeu as botas, Número 123 </a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-container">
                <div className="info">
                    <h5>Redes Sociais</h5>
                    <ul className="list">
                        <li><a href="https://wa.me/5574999883389" target="_blank">WhatsApp</a></li>
                        <li><a href="https://instagram.com/isadoracaarvalho" target="_blank">Instagram</a></li>
                        <li><a href="https://linkedin.com/in/isadoracaarvalho" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-container">
                <div className="info">
                    <h5>Legal</h5>
                    <ul className="list">
                        <li>Política de Privacidade</li>
                        <li>Termos de Uso</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>

            <footer className="footer-bottom">
                <p>&copy; Isadora Carvalho. Todos os direitos reservados</p>
            </footer>
        </footer>
    )
}

export default Footer;