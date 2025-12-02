import { useState } from "react";


export function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");



    return (
        <div>
            <input
                type="text"
                value={name}
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                value={email}
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={senha}
                placeholder="Digite sua senha"
                onChange={(e) => setSenha(e.target.value)}
            />

            <button onClick={(e) => console.log(name, email, senha)}>Click me</button>
        </div>
    );
}
