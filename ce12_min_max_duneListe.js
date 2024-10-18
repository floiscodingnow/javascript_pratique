function findMinMax(x){
    if(Array.isArray(x) !== true){
        throw new Error (" The parameter is not an array.")
    }
    if(x.length === 0){
        throw new Error("The array is empty bro.")
    }
    const minValue = Math.min(...x);
    const maxValue = Math.max(...x);
    console.log(minValue);
    console.log(maxValue);
    return {min:minValue, max:maxValue};
}
