function inverserMots(chaine){
    let MotsSeparer = chaine.split(" ");
    let listInverser = MotsSeparer.reverse();
    let Motinverser = listInverser.join(" ");
    return Motinverser;
}
