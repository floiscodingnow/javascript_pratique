function calculerPuissance(base, exposant){
    if (typeof base !== 'number' || typeof exposant !== 'number'){
        throw new Error('Arguments are not numbers. You need to pass numbers as arguments!')
    }
    let resultat = Math.pow(base,exposant);

    return resultat;
}
