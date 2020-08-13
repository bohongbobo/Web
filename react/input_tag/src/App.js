import React from "react";
import "./App.css";
import Addtag from "./components/Addtag.js";
import Shuai from "./components/Shuai.js";
import "./components/Shuai.css";

function App() {
  return (
    <div className="App">
      <Addtag />
      <Shuai />
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
