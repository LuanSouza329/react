import { Card } from "@/src/components/Card";

const teste1 = [
    { title: 'teste01', name: "teste1" },
    { title: 'teste02', name: "teste2" },
    { title: 'teste03', name: "teste3" },
    { title: 'teste04', name: "teste4" },
];


export default function Produtos() {
    return (
        <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "center" }}>
            {teste1.map((item, index) => (
                <Card key={index} title={item.title} name={item.name}/>  
            ))}
        </div>
    );
}