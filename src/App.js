import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Pokemon from './components/Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';

const Body = styled.body`

  background-color:#5c5c8a;
  color:white;
  height:40rem;

`;

function App() {

const[datosPokemon, guardarDatosPokemon] = useState({
  nombre:'',
  img1:'',
  img2:'',
  id:'',
  peso:'',
});

const[pokemon, setPokemon] = useState({
  nombre:''
});

const[consultar, setConsultarApi] = useState(false);
const[mostrarPokemon, setMostrarPokemon] = useState(false);
const[mensaje, setMensaje] = useState('');
const[boton, cambiarBoton] = useState(true);




const {nombre} = pokemon;


useEffect(()=>{

  if(consultar){

    const obtenerDatos = async() =>{
      const data = await  fetch('https://pokeapi.co/api/v2/pokemon/'+ nombre.toLowerCase(), {
        "method": "GET"})
      const respuestaData = await data.json();
      guardarDatosPokemon({
        nombre:respuestaData.name,
        img1:respuestaData.sprites.front_default,
        img2:respuestaData.sprites.back_default,
        id:respuestaData.id,
        peso:respuestaData.weight,
      });
      
    }
    obtenerDatos();
  }
},[consultar]);


const restablecer = () =>{
      setPokemon({
        nombre:''
      });
      guardarDatosPokemon({
        nombre:'',
        img:'',
        id:''
      });
      setConsultarApi(false);
      setMensaje('');
      cambiarBoton(true);
      setMostrarPokemon(false);
}


  return (
    <Body>
      <div className='container'>
      <Header/>
        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
          <Form
              pokemon={pokemon}
              setPokemon={setPokemon}
              setConsultarApi={setConsultarApi}
              setMostrarPokemon={setMostrarPokemon}
              restablecer={restablecer}
              setMensaje={setMensaje}
              mensaje={mensaje}
              cambiarBoton={cambiarBoton}
              boton={boton}
            />
          </div>
          <div className='col-xs-12 col-lg-6'>
            {mostrarPokemon?
            <Pokemon
            datosPokemon={datosPokemon}
            setConsultarApi={setConsultarApi}
            />
            :
            null
            }
            </div>
        </div>
      </div>
    </Body>
  );
}

export default App;

