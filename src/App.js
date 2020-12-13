import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Portfolio from "./Portfolio"
import Navbar from "./Navbar"


function App() {
  return (
      <Router>
        <Navbar />
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
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
