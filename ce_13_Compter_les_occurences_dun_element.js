function countOccurrences(liste, element){
    let conteur = 0;
    if (Array.isArray(liste)!== true && typeof element !== 'number'){
        throw new Error('The parameter should be a list and a number. Check again if you have this right');
    }
    
    liste.forEach((x) => (x === element && conteur++)); 
    
    return conteur;
}
