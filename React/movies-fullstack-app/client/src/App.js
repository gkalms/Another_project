import { FunctionalMovieContainer } from "./components/MovieContainer";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/movie">Movies Home</Link>
        <Switch>
          <Route path="/movie">
            <FunctionalMovieContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export { App };