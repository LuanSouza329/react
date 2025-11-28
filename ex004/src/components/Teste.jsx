import "./Teste.css"
const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
}];

export function Teste() {

    const greaterThan = people.filter((person) => {
        return person.id > 2;
    } //Sempre que usar {} use return       
    );

    const list = greaterThan.map((people) => <li key={people.id}> {people.name} </li>)

    return (<><ul>{list}</ul></>);
}