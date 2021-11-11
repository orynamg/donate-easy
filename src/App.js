import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NearMe from './pages/NearMe';


function App() {
  return (
      <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/near-me">
                    <NearMe />
                </Route>

            </Switch>
        </Router>
      </div>
  );
}

export default App;
