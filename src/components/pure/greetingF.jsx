import React, {useState} from 'react';
import PropTypes from 'prop-types';


// USAR NORMALMENTE Funcion en vez de clases


const GreetingF = (props) => {

    // Breve Introduccion a useState: 
    // const [varible, metodoParaActualizarla] = useState(ValorInicial);

    const [age, setstate] = useState(25);

    const birthday = () => {
        //actualizamos el state
        setstate(age+1)
    }

    return (
        <div>
                <h1>
                    Hola {props.name} desde componente funcional!
                </h1>
                <h2>
                    Tu edad es de: {age}
                </h2>
                <div>
                    <button onClick = {birthday}> 
                        Cumplir años
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
    
};


export default GreetingF;
