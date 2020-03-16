import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    return ( 
        <div className='cita'>
            <p>Nombre de la mascota: <span>{cita.mascota}</span></p>
            <p>Nombre del dueño: <span>{cita.nombre}</span></p>
            <p>Fecha y hora: <span>{cita.fecha} y {cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>

            <button
                className='button eliminar u-full-width'
                onClick={() => eliminarCita(cita.id)}
            >Eliminar &times;</button>
        </div>
     );
}

Cita.protoTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;