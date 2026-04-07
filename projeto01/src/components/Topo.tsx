import { useState } from 'react';
import BtnMenu from './BtnMenu';
import './topo.css';

export function Topo() {
    const [isOpen, setIsOpen] = useState(false);
    const links = ['Home', 'Sobre', 'Contato', 'Projetos'];

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
                    {links.map((link) => (
                        <li key={link}>
                            <a
                                href="#"
                                className='links'
                                onClick={() => setIsOpen(false)}
                            >
                                {link}
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
