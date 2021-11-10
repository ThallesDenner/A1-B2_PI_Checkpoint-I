const tempoPadrao = comida => {
    switch (comida) {
        case "pipoca":
            return 10;
        case "macarrão":
            return 8;
        case "carne":
            return 15;
        case "feijão":
            return 12;
        case "brigadeiro":
            return 8;
        default:
            return "Prato inexistente!";
    }
}



const microondas = (comida, tempo) => {
    const tempoPredefinido = tempoPadrao(comida);

    if (typeof (tempoPredefinido) == "string") {
        return tempoPredefinido;
    } else if (tempo > 2 * tempoPredefinido && tempo < 3 * tempoPredefinido) {
        return "A comida queimou!";
    } else if (tempo >= 3 * tempoPredefinido) {
        return "Kabumm!";
    } else if (tempo < tempoPredefinido) {
        return "Tempo insuficiente!";
    } else {
        return "Prato pronto, bom apetite!!!";
    }
}



console.log("\n--------------- TESTES ---------------\n")


console.log("\nPIPOCA------------------------------\n")
console.log(microondas("pipoca", 25));
console.log(microondas("pipoca", 30));
console.log(microondas("pipoca", 9));
console.log(microondas("pipoca", 10));


console.log("\nMACARRÃO------------------------------\n")
console.log(microondas("macarrão", 20));
console.log(microondas("macarrão", 24));
console.log(microondas("macarrão", 5));
console.log(microondas("macarrão", 8));


console.log("\nCARNE------------------------------\n")
console.log(microondas("carne", 35));
console.log(microondas("carne", 45));
console.log(microondas("carne", 10));
console.log(microondas("carne", 15));


console.log("\nFEIJÃO------------------------------\n")
console.log(microondas("feijão", 25));
console.log(microondas("feijão", 36));
console.log(microondas("feijão", 10));
console.log(microondas("feijão", 12));


console.log("\nBRIGADEIRO------------------------------\n")
console.log(microondas("brigadeiro", 20));
console.log(microondas("brigadeiro", 24));
console.log(microondas("brigadeiro", 5));
console.log(microondas("brigadeiro", 8));


console.log("\nLASANHA------------------------------\n")
console.log(microondas("lasanha", 10));