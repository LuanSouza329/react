import { useState } from "react";
import { ZerarContador } from "./ZerarContador";
import "./btn.css"

export function Contador() {
    const [contador, setContador] = useState(0);

    useState(()=>{
        console.log("Montado");
    }, []);

    function aumentar() {

        if (contador >= 10) {
            alert("Contador maior que 10");
            return;
        }
        setContador(contador + 1);

    }

    return (
        <div>
            <button onClick={aumentar} className="btn">{contador}</button>
            <ZerarContador setContador={setContador} className={"btn"}/>
        </div>
    );
}