import { React, Router, Route, Switch, Link } from "react";

const LandingPage = () => {
  return (
    <>
      <h1>Ok</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/contactus">
            <Contactus></Contactus>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default LandingPage;

function About() {
  return <h1>Hello About</h1>;
}

function Projects() {
  return <h1>Hello Projects</h1>;
}

function Contactus() {
  return <h1>Hello Contact Us</h1>;
}

function Home() {
  return <h1>Hello Rupesh</h1>;
}
