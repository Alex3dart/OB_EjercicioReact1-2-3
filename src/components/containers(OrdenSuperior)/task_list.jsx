import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task("Ejemplo", "Descripcion Generica", false, LEVELS.NORMAL)

    const changeState = (id) =>{
        console.log("TODO: Cambiar estado de una tarea")
    }

    return (
        <div>
            <div>
                <h1>
                    Tu tarea: 
                </h1> 
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista */}
            <TaskComponent Task={defaultTask}></TaskComponent>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
