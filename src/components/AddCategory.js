import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({setCategoria}) => {
    
    const [inputValue, setInputValue] = useState('');
    const cambiarValor = ( e ) => {
        setInputValue(e.target.value)
    }
    //el valor de useState siempre va a ser el ultimo valor que se almacena. 
    
    const handleSubmit = ( e ) => {
        e.preventDefault();
        if(inputValue.trim().length >= 2){
            /* console.log('submit hecho ', e); */
            setCategoria(cats => [inputValue,...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
            type="text"
            value={inputValue}
            onChange={ cambiarValor }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}

export default AddCategory
