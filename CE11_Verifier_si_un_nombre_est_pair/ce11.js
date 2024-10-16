function estPair(nombre){
    if (typeof nombre !== 'number'){
        throw new Error('This is not a number mother fucker')
    }
    if (nombre%2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(estPair(463));
