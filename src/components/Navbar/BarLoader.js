

document.addEventListener('DOMContentLoaded', function () {


    var btnBar = document.querySelector("#btnBar");
    var barLinks = document.querySelector(".bar-links");

    var clickValue = 0;

    btnBar.addEventListener('click', function () {
        if (clickValue == 0) {
            clickValue = 1;
            barLinks.style.display = 'flex';
            alert("Navbar aberta");
        }
        else if (clickValue == 1){
            clickValue = 0;
            barLinks.style.display = 'none';
            alert("Navbar fechada");
        }
    });
});