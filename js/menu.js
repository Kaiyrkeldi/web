var currentDiv = document.getElementById("div1");
function show(divID) {

    var div = document.getElementById(divID);

    currentDiv.style.display = "none";
    div.style.display = "block";

    currentDiv = div;
}
