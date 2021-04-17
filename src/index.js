import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SampleQue from "./SampleQuestion"
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App SampleQue={SampleQue}/>
  </StrictMode>,
  rootElement
);
