function myFunction() {
    var tacke = document.getElementById("tacke");
    var vise = document.getElementById("vise");
    var btnText = document.getElementById("myBtn");

    if (tacke.style.display === "none") {
        tacke.style.display = "inline";
        btnText.innerHTML = "Procitaj Više";
        vise.style.display = "none";
    } else {
        tacke.style.display = "none";
        btnText.innerHTML = "Pročitaj manje";
        vise.style.display = "inline";
    }
}