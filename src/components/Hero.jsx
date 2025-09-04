import '../styles/Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="title-container">
                <h1>Contabilidade Inteligente</h1>
                <p>Para pequenas e médias empresas</p>
            </div>
            
            <div className="buttons-container">
                <button className="btn1">Agende uma consultoria gratuita</button>
                <button className="btn2">Saiba mais</button>
            </div>
        </section>
    )
}

export default Hero