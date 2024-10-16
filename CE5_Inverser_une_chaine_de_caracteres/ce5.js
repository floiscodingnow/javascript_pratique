function inverserChaine(chaine){
     let toInverse = chaine;
     let words = toInverse.split("");
     let inversedWords = words.reverse();
     let chaineInverser = inversedWords.join("");
     console.log(chaineInverser);
     return chaineInverser;
}
 
 inverserChaine('hello')
