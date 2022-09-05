import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes: Definir los tipos de las "variables" 

class Greeting extends Component {

    // Props: Informacion que Le pasas por atributos al componente (un texto,etc...)
    // State: Informacion privada del componente para gestionarse
    constructor(props){
        super(props);
        this.state = {
            age:25
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola {this.props.name}!
                </h1>
                <h2>
                    Tu edad es de: {this.state.age}
                </h2>
                <div>
                    <button onClick = {this.birthday}> 
                        Cumplir años
                    </button>
                </div>
            </div>
        );


    }

    // Funcion tipo flecha, te permite usar this
    birthday = () => {
        this.setState((prevState) => (  //Recibes el state anterior
                {
                    age: prevState.age + 1 // Genera un nuevo state
                }
            )
        )}
}


Greeting.propTypes = {
    name: PropTypes.string, // Defines el tipo de "name"
};


export default Greeting;
