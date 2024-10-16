function calculerFactorielle(nombre){
    if (typeof nombre !== "number" || !Number.isInteger(nombre) || nombre < 0) {
        throw new Error(" You fucking need to put a positiv number that is not a Float mother fucker.");
    }
    if (nombre === 0 || nombre === 1){
        return 1;
    }
    return nombre*calculerFactorielle(nombre-1);
}
