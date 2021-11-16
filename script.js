
const motdepasse = document.getElementById("motdepasse");
const zonescore = document.getElementById("score");

function traitement() {
    const valeur = motdepasse.value;
    console.log(valeur);
    let score = 0;

    /* Teste la longueur */
    if (valeur.length >= 8) {
        console.log("longueur > 8");
        score++;
    }

    /* Teste s'il y a une majuscule */
    if (valeur.toLowerCase() !== valeur) {
        console.log("Il y a une majuscule");
        score++;
    }

    /* Teste s'il y a une minuscule */
    if (valeur.toUpperCase() !== valeur) {
        console.log("Il y a une minuscule");
        score++;
    }

    /* Teste s'il y a un nombre */
    if (/\d/.test(valeur)) {
        console.log("Il y a un nombre");
        score++;
    }

    zonescore.innerText = "";
    for (let i = 0; i < score; i++) {
        zonescore.append("*");
    }
}

motdepasse.addEventListener("keyup", traitement);