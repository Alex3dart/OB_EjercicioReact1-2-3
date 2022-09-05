import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({ Task }) => {
    return (
        <div>
            <h2>
                Nombre: { Task.name }
            </h2>
            <h3>
                Descripcion: { Task.description }
            </h3>
            <h4>
                Nivel: { Task.level }
            </h4>

            <h5>
                Esta tarea esta: { Task.completed ? "Completada" : "Pendiente"}
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    Task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
