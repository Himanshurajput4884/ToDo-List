import TasksComponent from "./component/Tasks/Tasks.component";
import "./App.css";


function App() {
 
  return (
    <div className="App">
      <div className="AppContainer">
        <h1 className="heading">ToDo List</h1>
        <TasksComponent />
      </div>
    </div>
  );
}

export default App;

