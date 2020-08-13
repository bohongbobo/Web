import React from "react";
import "./App.css";
import store from "./store";
import MainPage from "./components/MainPage";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;
