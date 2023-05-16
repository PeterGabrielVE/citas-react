import { useState } from 'react'
import Header from './components/Header';
import Formulario  from './components/Formulario';
import ListadoPacientes  from './components/ListadoPacientes';
import './App.css'


function App() {
 
  const [pacientes, setPacientes] = useState([]);

  const toma1valor = (valor)  =>{
    console.log(valor)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header toma1valor={toma1valor} />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
