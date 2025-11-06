import "./Title.css";
export default function Title({ className, element }) {
    return (
        <>
            <h1
                className={className}>
                {element} 
            </h1>
        </>
    );
}