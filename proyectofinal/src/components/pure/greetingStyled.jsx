import React, { useState } from 'react';


     // Definiendo estilos en constantes
    //? Estilo para usuario logueado
    const loggedStyle = {
        color: 'white'
    }

    // ? Estilo para usuario no logueado
    const unloggedStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

const GreetingStyled = ({ name }) => {

    //Generamos un  estado para el componente 
    //y asi controlar si el usuario esta loggeado o no logueado
    const [logged, setLogged] = useState(false);
    


    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? (<p> Hola, { name }</p>) : (<p>Please login</p>) }
            <button onClick={() => {
                console.log('Botón pulsado')
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
