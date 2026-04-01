import { Card } from "@/src/components/Card";
const name:string = "John Doe";

export default function Home() {
  return (
    <div>
      <Card title={'Luan Souza'} name={name} />
      <h1>Welcome to the Home Page</h1>
      <p style={teste}>Hello, {name}!</p>
    </div>
  );
}

const teste = {
  color: 'red',
  backgroundColor: 'lightgray',
  padding: '10px',
  borderRadius: '5px',
};
