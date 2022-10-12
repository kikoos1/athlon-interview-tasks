import React from "react";
import "./App.css";
import {Checkbox} from "./components/Checkbox/Checkbox";

function App() {
  return <div className='App'>
  <div style={{display:'grid',justifyItems:'start',gridTemplateColumns:'repeat(3,1fr)',gap:'2vw',margin:'2vw'}}>

    <div>
      <p>Base Checkbox</p>
      <Checkbox label={'Checkbox 1'}/>
    </div>

    <div>
    <p>
      Stacked Checkboxes
    </p>
      <Checkbox label={'Checkbox 1'}/>
      <Checkbox label={'Checkbox 2'}/>
      <Checkbox label={'Checkbox 3'}/>


    </div>
    <div>
    <p>
      Inline Checkboxes
    </p>
      <section style={{display:'flex',gap:'2vw'}}>
        <Checkbox label={'Checkbox 1'}/>
        <Checkbox label={'Checkbox 2'}/>
        <Checkbox label={'Checkbox 3'}/>
      </section>

    </div>
    <div>
      <p>Checked</p>
      <Checkbox checked={true} label={'Checkbox 1'}/>
    </div>
    <div>
      <p>Checked Disabled</p>
      <Checkbox checked={true} disabled={true} label={'Checkbox 1'}/>
    </div>
    <div>
      <p>Checkbox Disabled</p>
      <Checkbox disabled={true} label={'Checkbox 1'}/>
    </div>

    <div>
      <p>Checked Partial</p>
      <Checkbox intermediate={true} checked={true} label={'Checkbox 1'}/>
    </div>
    <div>
      <p>Checked Partial Disabled</p>
      <Checkbox intermediate={true} checked={true} disabled={true} label={'Checkbox 1'}/>
    </div>
  </div>
    </div>;
}

export default App;
