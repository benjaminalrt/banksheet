import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import BankSheet from "./components/BankSheet";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // on encapsule l'application dans le Provider redux qui va faire le lien entre le store et nos composants
  // puis dans la PersistGate, qui va récupérer les données au premier chargement de l'application
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BankSheet />
    </PersistGate>
  </Provider>,
  rootElement
);
