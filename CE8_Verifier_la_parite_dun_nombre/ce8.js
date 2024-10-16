function verifierParite(nombre){
    if (typeof nombre !== 'number' || !Number.isInteger(nombre)) {
    throw new Error("parametre doit etre un integer");
  }
    let moduloTwoResult = nombre % 2
    
    if (moduloTwoResult === 0) {
        return "pair";
    } 
    else {
       return "impair"; 
    }
}

console.log(verifierParite(27))
