import { useState } from 'react'
import apiCep from './services/url'

function App() {
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  
  async function consulta() {
    let cep: number | null = document.getElementById("inpCep")?.value
    console.log(cep);

    const resp =await apiCep.get(cep + '/json/')
    console.log(resp);

    const {logradouro} = resp.data
    setRua(logradouro)
    const {bairro} = resp.data
    setBairro(bairro)
    const {localidade} = resp.data
    setCidade(localidade)
  }

  return (
    <div className="App">
      <h1>Consultar Cep</h1>
      <input type="text"id="inpCep" />
      <button onClick={consulta}>Consultar</button>
      <p>{rua}</p>
      <p>{bairro}</p>
      <p>{cidade}</p>
    </div>
  )
}

export default App
