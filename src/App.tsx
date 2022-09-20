//import { stringify } from 'querystring';
import React from "react";
import babyNamesData from "./babyNamesData.json";
import sortArrayB from "./components/sortArrayB";
import './App.css';

interface babyNamesData {
  id: number;
  name: string;
  sex: string;
}

function App(): JSX.Element {
  function makeBabyNameElement(nameData: babyNamesData) {
    const classForSex = nameData.sex;
    return <div className={"babyName" + classForSex}>{nameData.name}</div>;
  }
  //console.log(sortArrayB(babyNamesData))
  return (
    <div className="App">
      <h3>Welcome to Mistura's Baby Name App</h3>
      There are {babyNamesData.length} names.
      <div className="mainList">
        {sortArrayB(babyNamesData).map(makeBabyNameElement)}
      </div>
    </div>
  );
}

export default App;
//the first part will execute, and then the map will then execute the makeBabyNameelement on each of the sorted object arrays
//give map a function, and for every element in the array. Do this function
//for each, element return an array  new div
