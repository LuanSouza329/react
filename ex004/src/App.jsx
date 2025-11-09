import Caixa from './components/Title';
import { Lista } from './components/Lista';
import './App.css'

function App() {

  return (
    <>
      <Caixa className="teste" element={"Lorem"} />
      <Caixa className="teste" element={"nada"} />
      <Caixa className="teste" element={"na"} />

      <Lista />

    </>
  )
}

export default App
