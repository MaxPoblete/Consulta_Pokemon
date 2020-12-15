import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import myImage from '../img/pokeimg.png';
import 'bootstrap/dist/css/bootstrap.min.css';





const Header = () =>{

    return(
        <div className='container-fluid'>
            <div className='row'>

                <div className='col-12'>
                   <h2 className='text-center'>Busca Pokemones </h2>
                </div>
            </div>
        </div>
    );
}

export default Header;