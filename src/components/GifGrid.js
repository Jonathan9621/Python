import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GiftGridItem from './GiftGridItem';


const GifGrid = ({ categoria }) => {
    /* 
        helpers => van a ser funciones que hacen un trabajo en especifico y retorna un valor
    */
    const { data:images, loading } = useFetchGifs( categoria );
    
    return (
        <>
            <h3>{ categoria }</h3>  
            { loading && <p>Cargando..</p> }
            <div className="card-grid">
                { 
                    images.map( img => 
                        <GiftGridItem  
                            key={ img.id } 
                            { ...img }
                        />
                    )
                }
            </div>
        </>
    )     
}

export default GifGrid
