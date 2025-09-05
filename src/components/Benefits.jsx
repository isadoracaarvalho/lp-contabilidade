import '../styles/Benefits.css'

import { VscWorkspaceTrusted } from "react-icons/vsc"

const Benefits = () => {
    return (
        <section className="benefits-container">
            <h2>Por que nos contratar?</h2>
            <section className="benefits">
                <div className="item">
                    <div className="icon-container">
                        <VscWorkspaceTrusted className='icon' />
                    </div>
                    <h3>Garantia de Segurança</h3>
                </div>

                <div className="item">
                    <div className="icon">
                        <VscWorkspaceTrusted />
                    </div>
                    <h3>Garantia de Segurança</h3>
                </div>

                <div className="item">
                    <div className="icon">
                        <VscWorkspaceTrusted />
                    </div>
                    <h3>Garantia de Segurança</h3>
                </div>

                <div className="item">
                    <div className="icon">
                        <VscWorkspaceTrusted />
                    </div>
                    <h3>Garantia de Segurança</h3>
                </div>
            </section>
            <div className="button">
                <button className='btn'>Fale conosco</button>
            </div>
        </section>
    )
}

export default Benefits