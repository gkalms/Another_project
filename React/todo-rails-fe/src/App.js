import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { ToDoEdit} from "./components/todo/ToDoEdit"
import { ToDoList } from "./components/todo/ToDoList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          <Route exact path="/todo/create">
            <h1>Todo Create</h1>
          </Route>

          <Route exact path="/todo/edit/:id">
            <ToDoEdit />
          </Route>

          <Route exact path="/">
            <ToDoList />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
