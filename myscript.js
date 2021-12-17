var button = document.getElementById('mybutton');
var title = document.getElementById("mytitle");
var headerLogo = document.getElementById('headerLogo');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');

button.onclick = function() {
   modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

headerLogo.onmouseenter = function() {
    headerLogo.style.fontSize = "80px";
}

headerLogo.onmouseleave = function() {
    headerLogo.style.fontSize = "";
}

