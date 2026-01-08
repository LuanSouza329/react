import { useEffect, useState } from "react";

export function Todo() {
    const [list, setList] = useState([]);
    const [openId, setOpenId] = useState(null);


    useEffect(() => {
        async function fetchList() {
            try {
                const response = await fetch("http://localhost:8000/api/task");
                const data = await response.json();
                const { tasks } = data;
                setList(tasks);
            } catch (error) {
                console.log(error);
            }
        }

        fetchList();
    }, []);

    const listaAtt = list.map(task => {
        const isOpen = openId === task.id;

        return (
            <div
                key={task.id}
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    marginBottom: "10px",
                    padding: "10px",
                    width: "98%",
                    marginLeft: "10px"
                }}
            >
                {/* Linha principal */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer"
                    }}
                    onClick={() => setOpenId(isOpen ? null : task.id)}
                >
                    {/* Título */}
                    <strong>{task.titulo}</strong>

                    {/* Status + Data */}
                    <div style={{ display: "flex", gap: "10px", fontSize: "12px", color: "#666" }}>
                        <span>{task.status}</span>
                        <span>{new Date(task.criado_em).toLocaleDateString()}</span>
                    </div>
                </div>

                {/* Área expandida */}
                {isOpen && (
                    <div style={{ marginTop: "8px" }}>
                        <p style={{ marginBottom: "10px" }}>{task.descricao}</p>

                        {/* Ações */}
                        <div style={{ display: "flex", gap: "8px" }}>
                            <button>Editar</button>
                            <button>Excluir</button>
                        </div>
                    </div>
                )}
            </div>
        );
    });

    return (
        <ul className="teste">
            {listaAtt}
        </ul>
    );
}
