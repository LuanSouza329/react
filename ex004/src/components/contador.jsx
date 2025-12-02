import { useState, useEffect, useRef } from "react";
import { ZerarContador } from "./ZerarContador";
import "./btn.css"

export function Contador() {
    const [contador, setContador] = useState(0);

    const teste = useRef(null);

    useEffect(() => {
        console.log("Montado");
    }, []);

    function handleAumentar(e) {

        if (contador >= 10) {
            alert("Contador maior que 10");
            return;
        }
        setContador(contador + 1);
        e.stopPropagation();
    }

    function handleZerar(e) {
        e.stopPropagation();
        setContador(0);

    }

    function handleDiv() {
        alert("teste")
    }


    return (
        <div onClick={handleDiv}>
            <button onClick={handleAumentar} className="btn" ref={teste} >{contador}</button>
            <ZerarContador handleZerar={handleZerar} className={"btn"} />
        </div>
    );
}