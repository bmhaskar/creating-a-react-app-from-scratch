import React, {FC} from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import image from './React-and-typescript.png';
const App: FC = () => {  
  
  return (
      <div className="App">
        <h1> Hello, World! with typescript </h1>
        <img src={image} />
      </div>
    );  
}

export default hot(module)(App);
