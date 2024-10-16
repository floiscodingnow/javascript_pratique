function findMax(array) {
    if (!Array.isArray(array)) {
    throw new Error("Argument must be an array");
  }
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
    let x = array.reduce((acc, num) => acc > num ? acc : num, array[0]);
    return x ;
}

let tableau = [34,79,45,5,78,2,657,985,3235,46];

console.log(findMax(tableau));
