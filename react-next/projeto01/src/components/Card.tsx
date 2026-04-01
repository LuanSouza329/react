
export function Card({title, name}: { title: string; name: string }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{name}</p>
        </div>
    );
}