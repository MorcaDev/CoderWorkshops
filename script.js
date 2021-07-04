let showMenu = (ev) =>{ 
    if(open === false){
        desplegableMenu.classList.add("visibility");
        desplegableSpan.style.backgroundImage = `url("MediaSources/icons/downArrow.png")`
        open = true
    }else if(open === true){
        desplegableMenu.classList.remove("visibility")
        desplegableSpan.style.backgroundImage = `url("MediaSources/icons/upArrow.png")`
        open = false
    }
}

let desplegable = document.querySelector("#desplegable");
let desplegableMenu = document.querySelector("#desplegable-menu");
let desplegableSpan = desplegable.querySelector("span");

let open = desplegable.classList.contains("visibility");

desplegable.addEventListener("click", showMenu);
