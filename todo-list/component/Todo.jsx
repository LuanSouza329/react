import { useEffect, useState } from "react";

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

    return (
        <ul className="teste">
            {list.map(task => (
                <div key={task.id}>
                    <h2>{task.titulo}</h2>
                    <p>{task.descricao}</p>
                </div>
            ))}
        </ul>
    );
}
