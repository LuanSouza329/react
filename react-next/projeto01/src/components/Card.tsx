import test from "node:test";

interface CardProps {
    title: string,
    name: string,
}

export function Card({title, name}: CardProps) {
    return (
        <div style={{margin: "10px", border: "1px solid black", padding: "10px", borderRadius: "5px", width: "200px", textAlign: "center"}}>
            <h1>{title}</h1>
            <p>{name}</p>
        </div>
    );
}
