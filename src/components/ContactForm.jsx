import '../styles/ContactForm.css'

const ContactForm = () => {
    return (
        <section id='contact' className="section-container">
            <div className="title">
                <h1>Entre em contato</h1>
                <h2>Resposta rápida por email.</h2>
            </div>

            <form action="">
                <input placeholder="Nome" type="text" required/>
                <input placeholder="Email" type="email" required/>
                <textarea placeholder="Mensagem" rows={8} required></textarea>
                <input type="submit" value="ENVIAR" />
            </form>
        </section>
    )
}

export default ContactForm