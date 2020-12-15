import { Fragment, useState } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';

const Formulario = styled.form`
 margin:1rem;
 padding:1rem;
 background-color:#3399ff;
 border-radius:5px;
`;

const Form = ({ pokemon, setPokemon, setConsultarApi, setMostrarPokemon,restablecer,
setMensaje, mensaje, cambiarBoton, boton}) => {
     


    const handleChange = e => {
        setPokemon({
            ...pokemon,
            [e.target.name]: e.target.value
        });
    }

    const {nombre} = pokemon;
    
    const submitForm = (e) =>{
        
        e.preventDefault();

    if(nombre.trim()===''){
        setMensaje('ingrese Un Nombre');

    }else{
    
        setConsultarApi(true);
        setMostrarPokemon(true);
        setMensaje('');
        cambiarBoton(false);
        
    }
    

    }

    return(
        <Fragment>

                <Formulario onSubmit={submitForm}>
                   <h3>Ingresa Nombre <strong>pokemon</strong></h3>
                    <label>Nombre</label><br/>
                    <input
                    className='form-control'
                        type='text'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    /><br/>
                    {boton?
                        <button
                            className ='btn btn-block bg-primary'
                            type='submit'>
                            buscar
                        </button>
                :
                
                        <button
                            className ='btn btn-block bg-warning'
                            onClick={restablecer}
                            >
                            Borrar
                        </button>                
                
                }


                </Formulario>
                <h5>{mensaje}</h5>
 
        </Fragment>
    );
}

export default Form;