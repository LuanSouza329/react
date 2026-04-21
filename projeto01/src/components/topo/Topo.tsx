import { useState } from 'react';
import BtnMenu from "../topo/BtnMenu"; // Certifique-se de que o caminho para BtnMenu está correto
import './topo.css';

export function Topo() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {linkName: "Home", id:"#home"},
        {linkName: "Skills", id: "#skills"},
        {linkName: "Educação", id:"#educacao"},
        {linkName: "Projeto", id:"#projetos"}
    ];

    return (
        <header>
            <div>
                <h1>Meu Site</h1>
            </div>

            <nav>
                <ul
                    id="menu-principal"
                    className={`lista-menu ${isOpen ? 'lista-open' : ''}`}
                >
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.id}
                                className='links'
                                onClick={() => setIsOpen(false)}
                            >
                                {link.linkName}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <BtnMenu
                isOpen={isOpen}
                onToggle={() => setIsOpen(!isOpen)}
            />
        </header>
    );
}
