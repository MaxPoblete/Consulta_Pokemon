import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';

const Contenedor = styled.div`

margin:1rem;
padding:1rem;
background-color: #33cccc;
color:black;

`;

const Pokemon = ({datosPokemon}) =>{

    const{nombre, img1, img2, id, peso} = datosPokemon; 


    return(

        <Fragment>
            <Contenedor>
                
              
                <div class="container">
                    <h2>Datos Pokemon</h2>
                    <ul class="list-group">
                        <li class="list-group-item">Nombre      : {nombre}</li>
                        <li class="list-group-item">id          : {id}</li>
                        <li class="list-group-item">peso        : {peso}</li>
                    </ul>
                </div>
                    <div className='row'>
                        <div className='col-6'>
                            <img style={{width:'10rem', height:'10rem'}} src={img1}></img>
                        </div>
                        <div className='col-6'>
                            <img style={{width:'10rem', height:'10rem'}}  src={img2}></img>
                        </div>
                    </div>
 
            </Contenedor> 
        </Fragment>
    );
}

export default Pokemon;

