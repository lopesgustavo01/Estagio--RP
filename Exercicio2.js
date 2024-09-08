function verificarLetraA(texto) {
    
    const rgx = /[áàâãa]/gi;
    const cont = texto.match(rgx);
    
    
    if (cont) {
        console.log(`A letra 'a' aparece ${cont.length} vezes na string.`);
    } else {
        console.log("A letra 'a' não aparece na string.");
    }
}

const minhaString = "9-A a a aa AAaA";
verificarLetraA(minhaString);
