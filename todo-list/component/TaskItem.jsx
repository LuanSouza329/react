import { useState } from "react";
import "./TaskItem.css";

export function TaskItem({ list, handleStatus }) {
    const [openId, setOpenId] = useState(null);

    const listaAtt = list.map((task) => {
        const isOpen = openId === task.id;

        return (
            <div key={task.id} className="container-list"  onClick={() => setOpenId(isOpen ? null : task.id)}>

                <div className="input-container">
                    <input
                        type="checkbox"
                        onChange={()=> handleStatus(task.id, !task.status, task.titulo)}
                        onClick={(e) => e.stopPropagation()} // evita abrir ao clicar no checkbox
                    />
                    <strong>{task.titulo}</strong>

                    <small className="status-container">
                        <p>{task.status}</p>
                        {new Date(task.criado_em).toLocaleDateString()}
                    </small>
                </div>

                {isOpen && (
                    <div className="descricao-container">
                        <p>{task.descricao}</p>
                    </div>
                )}
            </div>
        );
    });

    return <>{listaAtt}</>;
}
