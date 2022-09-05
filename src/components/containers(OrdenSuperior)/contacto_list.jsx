import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';

const ContactoListComponent = () => {

    const contactoGenerico = new Contacto("Nombre Generico", "Apellido Generico", "Email Generico", false)


    return (
        <div>
            <h1>
                Tu contacto:
            </h1>
            <ContactoComponent Contacto={contactoGenerico}></ContactoComponent>
        </div>
    );
};


ContactoListComponent.propTypes = {

};


export default ContactoListComponent;
