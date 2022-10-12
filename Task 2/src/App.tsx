import React from "react";
import "./App.css";
import {AuthProvider} from "./context/auth.context";
import {Wrapper} from "./components/Wrapper/Wrapper";

function App() {

  return <div className='App'>
    <AuthProvider>
      <Wrapper />
    </AuthProvider>

  </div>;
}

export default App;
