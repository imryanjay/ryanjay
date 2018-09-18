import React from 'react';
import ReactDOM from 'react-dom';

import App from "App";

const renderComponent = (Component) => {
  ReactDOM.render(
    <Component/>,
    document.getElementById("root")
  );
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    renderComponent(App);
  });
}
