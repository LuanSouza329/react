export function ZerarContador ({setContador, className}){

    function zerar (){
        setContador(0);
    }

    return(
        <button onClick={zerar} className={className}>Zerar</button>
    );
}