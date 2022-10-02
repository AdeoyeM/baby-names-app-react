//import { stringify } from 'querystring';
import React from "react";
import babyNamesDataJSON from "./babyNamesData.json";
import sortArrayB from "./components/sortArrayB";
import './App.css';
import { useEffect, useState, createContext} from "react"
import HeaderApp from "./components/headerApp";

interface babyNamesData{
  id: number;
  name: string;
  sex: string;
}

export const Search = createContext<any>([])

function App(): JSX.Element{ 
 const [search, setSearch] = useState("")
 const [data, setData] = useState(sortArrayB(babyNamesDataJSON) as babyNamesData[])

 useEffect(() => {
     if (search === "") {
       return setData(() => sortArrayB(babyNamesDataJSON) as babyNamesData[])
     }
     setData(() => sortArrayB(babyNamesDataJSON.filter(data => data.name.toLowerCase().includes(search.toLowerCase())))) 
 }, [search])



  function MakeBabyNameElement(nameData: babyNamesData) {
    const classForSex = nameData.sex;
    return <div className={"babyName" + classForSex}>{nameData.name}</div>;
  }
  //console.log(sortArrayB(babyNamesData))
  return (
    <Search.Provider value={[search, setSearch]}>
    <div className="App">
    <p>{search}</p>
      <HeaderApp />
      </div>
      <div>
      <h3>Welcome to Mistura's Baby Name App</h3>
      There are {data.length} names.
      <div className="mainList">
        {sortArrayB(data).map((names) => <MakeBabyNameElement key={names.id} id={names.id} name={names.name} sex={names.sex} />)}
      </div>
    </div>
    </Search.Provider>
  );
}

export default App;
//the first part will execute, and then the map will then execute the makeBabyNameelement on each of the sorted object arrays
//give map a function, and for every element in the array. Do this function
//for each, element return an array  new div
