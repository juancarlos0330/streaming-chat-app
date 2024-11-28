import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

// pages
import Home from "./components/Home";
import configureStore from "./configureStore";

// configure redux store
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Home />
      <StatusBar style="auto" />
    </Provider>
  );
};

export default App;
