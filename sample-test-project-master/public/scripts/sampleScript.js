var myArray = [];

function addToArray(element) {
  myArray.push(element);
}

function getArray(){
  return myArray;
}

module.exports = {
    addToArray : addToArray,
    getArray : getArray
};
