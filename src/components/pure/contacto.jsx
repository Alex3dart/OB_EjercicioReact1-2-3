import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ContactoComponent = ({Contacto}) => {
    return (
        <div>
            <h2>
                Nombre: { Contacto.nombre }
            </h2>
            <h3>
                Apellido: { Contacto.apellido }
            </h3>
            <h4>
                Email: { Contacto.email }
            </h4>

            <h5>
                El usuario esta conectado: { Contacto.conectado ? "Contacto en linea" : "Contacto desconectado"}
            </h5>
        </div>
    );
};


Contacto.propTypes = {
    Contacto : PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
