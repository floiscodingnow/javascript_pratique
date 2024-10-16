function sommeDesChiffres(nombre){
    let strNombre = nombre.toString(); //1
    let arrSTR = strNombre.split(""); // arrSTR is an array with strings
    let lenArray = arrSTR.length;
    let arrNUM = [];
    for (let i = 0; i < lenArray; i++ ){ 
        arrNUM.push(parseInt(arrSTR[i]));
    }
    let sum = arrNUM.reduce((acc, num) => acc + num, 0);
    return sum;
}

console.log(sommeDesChiffres(22));
