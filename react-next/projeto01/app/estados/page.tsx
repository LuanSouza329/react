"use client";
import { useState, useEffect} from "react";


export default function Estados() {

    const [contador, setContador] = useState(0);

    useEffect(() => {

    }, [contador]); 

    return (
        <div style={{backgroundColor: "red", padding: "20px", border: "1px solid black", height: "100vh"}}>
            <p style={{fontWeight: "bold"}}>Contador: {contador}</p>,
            
            <button style={{backgroundColor: "red", padding: "10px", border: "1px solid black", cursor: "pointer", fontWeight: "bold", borderRadius: "5px"}}
                onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>
                <button style={{backgroundColor: "red", padding: "10px", border: "1px solid black", cursor: "pointer", fontWeight: "bold", borderRadius: "5px", marginLeft: "10px"}}
                onClick={() => setContador(contador - 1)}>
                Decrementar
            </button>
        </div>
    );
}