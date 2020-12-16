function funkcija2() {
    let imePrezime;
    let email;
    let adresa;

    imePrezime = document.getElementById("imePrezime2").value;
    email = document.getElementById("email2").value;
    adresa = document.getElementById("adresa2").value;

    if (imePrezime === "" || !imePrezime.includes(" ")) {
        alert("LOS UNOS!Unesite ponovo ime i prezime");
        return false;
    } else if (email === "" || !email.includes('@')) {

        alert("LOS UNOS!unesite ponovo email");
        return false;
    } else if (adresa === "") {

        alert("LOSS UNOS!Unesite ponovo adresu");
        return false;
    } else {
        alert("Dobar unos.")
    }
}

function funkcija1() {
    let imePrezime;
    let email;
    let adresa;

    imePrezime = document.getElementById("imePrezime").value;
    email = document.getElementById("email").value;
    adresa = document.getElementById("adresa").value;

    if (imePrezime === "" || !imePrezime.includes(" ")) {
        alert("LOS UNOS!Unesite ponovo ime i prezime");
        return false;
    } else if (email === "" || !email.includes('@')) {
        alert("LOS UNOS!unesite ponovo email");
        return false;
    } else if (adresa === "") {
        alert("LOSS UNOS!Unesite ponovo adresu");
        return false;
    } else {
        alert("Dobar unos.")
    }
}