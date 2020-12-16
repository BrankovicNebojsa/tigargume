function funkcija() {
    let ime;
    let prezime
    let email;
    let poruka;
    //pokupi ime, prezime, mejl i poruku iz forme preko id-ija
    ime = document.getElementById("ime").value;
    prezime = document.getElementById("prezime").value;
    email = document.getElementById("email").value;
    poruka = document.getElementById("textBox").value;
    //ako je ime prazan string
    //prazan string znači da nista nije uneto
    if (ime === "") {
        alert("Pogrešan unos imena!");
        return false;
    } else if (prezime === "") {
        alert("Pogrešan unos prezimena!");
        return false;
    } else if (email === "" || !email.includes('@')) {
        alert("Pogrešan unos! Unesi ispravan email!");
        return false;

    } else if (poruka === "") {
        alert("Pogrešan unos! Poruka je prazna.");
        return false;
    } else {
        alert("Dobar unos.")
    }

}