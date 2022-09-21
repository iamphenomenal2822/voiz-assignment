import React from 'react';
import './App.css';
// import Select from 'react-select';
import Creatable from 'react-select/creatable'

const countries = [
  {label : 'India', value:'New Delhi'},
  {label : 'Spain', value:'Madrid'},
  {label : 'France', value:'Paris'},
  {label : 'United States of America', value:'Washington DC'},
  {label : 'Russia', value:'St. Petersburgh'},
  {label : 'Australia', value:'Canberra'},
  {label : 'Canada', value:'Toronto'}
];

function App() {

  return (
    <div className="App">
      <Creatable
      options={countries}
      isMulti
      onChange = {(opt,meta) => console.log(opt,meta)}
      />
    </div>
  )
}

export default App
