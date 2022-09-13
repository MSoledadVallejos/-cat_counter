import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoCat from './imagenes/cat_logo.png';
import { useState } from 'react'; //Hooks - useState

function App() {

const [numClics, setNumClics] = useState(0);

  const manejarClic = ()=>{
   setNumClics(numClics + 1); 
  }

  const reiniciarContador = ()=>{
    setNumClics(numClics - 1);
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='logo'
         src={logoCat}
        alt ='logo app'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton
        texto = 'More Cats'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton
        texto='Less Cats'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
