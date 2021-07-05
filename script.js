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

//////////////////////////////////////////////

let accountant = 0

let extraWorkshops = [{
    name: "React",
    text: "Here You are going to learn the most popular ans useful framework to work with JS.",
    src : "#"
},{
    name: "AI",
    text: "The machine learning is the future for apps and programms , learn how to develop it and handle it.",
    src : "#"
},{
    name: "Figma",
    text: "The first step to everything is imagining, but the second is prototyping the idea.",
    src : "#"
},{
    name: "HTML5",
    text: "The website structure is an art, learn how to be the master of this art in this workshop",
    src : "#"
}
]

let remove = () => {
    loaderButton.removeEventListener("click",showClasses)
    loaderButton.remove()
}

let nodesCreator = (number) => {

    const container = document.createElement("div");

    const video = document.createElement("video");
    video.setAttribute("controls","");
    video.setAttribute("preload","auto");
    video.src = `${extraWorkshops[number].src}`;

    const title = document.createElement("h3");
    title.textContent= extraWorkshops[number].name 

    const decoration = document.createElement("span");

    const description = document.createElement("p");
    description.textContent = extraWorkshops[number].text


    title.appendChild(decoration);
    container.append(video,title,description);

    loaderParent.appendChild(container);

    accountant++
    
    if(accountant === 4){
        remove()
    }
}

let showClasses = ( ev ) =>{
    if(window.innerWidth <= 1184){
        nodesCreator(accountant)
    }else if(window.innerWidth >= 1185 && accountant%2 != 0){
        nodesCreator(accountant)
    }else if(window.innerWidth >= 1185){
        nodesCreator(accountant)
        nodesCreator(accountant)
    }
}

let loaderButton = document.getElementById("loader")
let loaderParent = document.getElementById("loader-parent")

loaderButton.addEventListener("click", showClasses);

