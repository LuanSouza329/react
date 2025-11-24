import "./PostCard.css"

export function PostCard({ title, body, className }) {
    return (
        <div  className={className}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}