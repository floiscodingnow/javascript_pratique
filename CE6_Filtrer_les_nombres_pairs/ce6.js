function filterEvenNumbers(arr){
    let arrDeNrPair = arr.filter(function(num){
        return num % 2 === 0;})
    return arrDeNrPair;
}
