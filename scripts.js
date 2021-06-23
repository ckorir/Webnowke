let opennav = document.querySelector(".burger");
let closenav = document.querySelector(".close img");
let items = document.querySelector(".navlinks");

opennav.addEventListener("click",show);
closenav.addEventListener("click",close);

function show(){
    opennav.style.display = "none";
    closenav.style.display = "block";
    items.style.display = "block";
}

function close(){
    opennav.style.display = "block";
    closenav.style.display = "none";
    items.style.display = "none";
}