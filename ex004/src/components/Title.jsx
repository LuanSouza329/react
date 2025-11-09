import "./Title.css";
export default function Caixa({ className, element }) {

    function alerta (event){
        event.target.style.backgroundColor = "white";
    }

    return (
        <>
            <div
                className={className} onMouseOver={alerta} onMouseOut={(event)=>{
                    event.target.style.backgroundColor = ""
                }}>
                {element}
            </div>
        </>
    );
}
