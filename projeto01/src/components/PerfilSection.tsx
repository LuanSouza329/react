import FotoPerfil from "./FotoPerfil";
import linkedinIcon from "../assets/images/linkedin.svg";
import githubIcon from "../assets/images/github.svg";
import instagramIcon from "../assets/images/instagram.svg";
import SocialLinks from "./SocialLinks";

function PerfilSection() {
    const socialMedia = [
        { href: "https://www.linkedin.com/in/luiz-fernando-oliveira/", src: linkedinIcon, alt: "LinkedIn" },
        { href: "https://github.com/luiz-fernando-oliveira", src: githubIcon, alt: "GitHub" },
        { href: "https://www.instagram.com/luiz-fernando-oliveira/", src: instagramIcon, alt: "Instagram" }
    ];

    return (
        <section className="perfil-section" id="sobre">
            <FotoPerfil />
            <p className="perfil-description">
                Olá! Eu sou um desenvolvedor web apaixonado por criar experiências digitais incríveis. Com habilidades em HTML, CSS, JavaScript e React, estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para entregar projetos de alta qualidade.
            </p>
            <div className="social-links">
                {socialMedia.map((media, index) => (
                    <SocialLinks key={index} href={media.href} src={media.src} alt={media.alt} />
                ))}
            </div>
        </section>
    );
}

export default PerfilSection;

