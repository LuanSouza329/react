export function Lista() {
    const lista = [
        { id: 1001, brand: 'Ford' },
        { id: 1002, brand: 'BMW' },
        { id: 1003, brand: 'Audi' }
    ];
    return (
        <>
            <h1>Pessoas</h1>
            <ul>
                {
                    lista.map((carros)=>
                        <li key={carros.id}>I am a  {console.log} </li>
                    )
                }
            </ul>
        </>
    );
}