import { isObjectBindingPattern } from "typescript";

interface babyNameData {
    id: number;
    name: string;
    sex: string;
  }
  //function to sort array of objects in babynamesdata.json
  let number = 0;
  
  function sortTwoObjects(objA: babyNameData, objb: babyNameData) {
    number++;
    //console.log(number);
    console.log(objA.name )
  
    return objA.name < objb.name ? 1 : 0;
  
    // if (objA.name > objb.name){
    //   return 1;
    //   }
    //   else {
    //     return 0;
    //   }
  }
  
  //return objA.name > objB.name ? 1 ; 0 (ternery) //give it a boolean statement and respond if its true or false
  
  function sortArrayB(arr: babyNameData[]): babyNameData[] {
    const arr2 = [...arr].sort(sortTwoObjects)
    console.log(arr2)
    return arr2;
  
    //sort will have a default rule, but you can give it new rules
    //sort will take two random things from the array and compare them
    //handed the new objert sorted to a div
    //this function is modifying the original objects we have rather than the sortArrayA which created a new array
    //new array had no other ids as its overwritten
  }
  
  export default sortArrayB;
  
  //for each object, collect name property and return name
  //make a function that pulls all the names out and creates a new array. then sort the array
  