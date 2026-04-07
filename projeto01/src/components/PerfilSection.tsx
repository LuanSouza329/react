import FotoPerfil from "./FotoPerfil";

function PerfilSection() {
    return (
        <section className="perfil-section" id="sobre">
            <div className="foto-container" >
                <FotoPerfil />
            </div>
            <p>
                Olá! Eu sou um desenvolvedor web apaixonado por criar experiências digitais incríveis. Com habilidades em HTML, CSS, JavaScript e React, estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para entregar projetos de alta qualidade.
            </p>
        </section>
    );
}

export default PerfilSection;

