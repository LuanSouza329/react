export function ZerarContador ({className, handleZerar}){

    return(
        <button onClick={handleZerar} className={className}>Zerar</button>
    );
}