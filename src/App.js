import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/containers(OrdenSuperior)/task_list';
import ContactoListComponent from './components/containers(OrdenSuperior)/contacto_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Componente propio Greetings.jxs */}
        {/* <Greeting name = "Alex"></Greeting> */}
        {/* <GreetingF name="Alex"></GreetingF> */}

        {/*Componente de Listado de Tareas*/}
        {/* <TaskListComponent></TaskListComponent> */}

        {/* Componente de Lista de contactos */}
        <ContactoListComponent></ContactoListComponent>

      </header>
      
    </div>
  );
}

export default App;
