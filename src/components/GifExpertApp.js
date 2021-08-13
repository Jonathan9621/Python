import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    
    const [categorias, setCategorias] = useState(['Spiderman']);
    
    return (
        <>
            <h2>GifExpertApp</h2>   
            <AddCategory  setCategoria={ setCategorias }/>
            <br></br>
            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                { 
                    categorias.map( (c) => 
                        <GifGrid key={ c } categoria={ c }
                    />)
                }
            </ol>
        </>
    )
}



export default GifExpertApp
