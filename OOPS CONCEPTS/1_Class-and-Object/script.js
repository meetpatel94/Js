class cars {
    sportscar() {
        console.log("very fast");
    }
    midspeedcar() {
        console.log("mid range car");
    }
    superiercar(superier) {
        this.speed = superier;
        console.log("very super");
    }
}
let lamborgini = new cars()
lamborgini.sportscar();

// let buggati = new cars()
// buggati.superiercar("450km\s");