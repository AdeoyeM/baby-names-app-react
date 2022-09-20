interface babyNameData {
  id: number;
  name: string;
  sex: string;
}
function babyNameExtraction(obj: babyNameData) {
  return obj.name;
}

function sortArrayAl(arr: babyNameData[]) {
  const unsortedArray = arr.map(babyNameExtraction);
  return unsortedArray.sort();

  //this function is the 2nd function which will pull the names out of each babynameData
  //map will execute for each of the array key values. So no need for for loop
}

export default sortArrayAl;

//for each object, collect name property and return name
//make a function that pulls all the names out and creates a new array. then sort the array.
