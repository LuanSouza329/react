import { useEffect, useState } from "react";
import { TaskItem } from "./TaskItem";

export function Todo() {
    const [list, setList] = useState([]);

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


    async function handleStatus(id, titulo, descricao) {
        let newStatus = "Feito"

        try {
            const response = await fetch(`http://localhost:8000/api/task/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status: newStatus, titulo:titulo, descricao:descricao })
            });

            const data = await response.json();

            console.log("API RETORNOU", data);

            setList(prev =>
                prev.map(t =>
                    t.id === id ? { ...t, status: newStatus } : t
                )
            );
        } catch (error) {
            console.error("Erro ao atualizar status:", error);
        }
    }

    return (
        <TaskItem list={list} handleStatus={handleStatus} />
    );

}
