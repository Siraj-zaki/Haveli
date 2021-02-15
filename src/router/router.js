import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={Home} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
