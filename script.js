//////////////////////////////////////////////
///////////////MENU DESPLEGABLE///////////////
//////////////////////////////////////////////

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
//////////////////ZOOM///////////////////////
//////////////////////////////////////////////

let workshop1 = document.getElementById("W1");
let workshop2 = document.getElementById("W2");
let workshop3 = document.getElementById("W3");
let workshop4 = document.getElementById("W4");

let objectW1 = {
    div: workshop1,
    video : workshop1.querySelector("video"),
    title : workshop1.querySelector("h3"),
    span : workshop1.querySelector("span"),
    text : workshop1.querySelector("p")
}
let objectW2 = {
    div: workshop2,
    video : workshop2.querySelector("video"),
    title : workshop2.querySelector("h3"),
    span : workshop2.querySelector("span"),
    text : workshop2.querySelector("p")
}
let objectW3 = {
    div: workshop3,
    video : workshop3.querySelector("video"),
    title : workshop3.querySelector("h3"),
    span : workshop3.querySelector("span"),
    text : workshop3.querySelector("p")
}
let objectW4 = {
    div: workshop4,
    video : workshop4.querySelector("video"),
    title : workshop4.querySelector("h3"),
    span : workshop4.querySelector("span"),
    text : workshop4.querySelector("p")
}

let closeButton = document.createElement("button")
closeButton.classList.add("button1")

let closeZoom = (node,ev) =>{
    ev.stopPropagation()

    node.video.classList.remove("video")

    node.title.classList.remove("h3")

    node.span.classList.remove("span")

    node.text.classList.remove("p")

    node.div.classList.remove("zoom1");

    node.div.removeChild(closeButton);

    closeButton.removeEventListener("click",indetifyZoomToClose)

    node.div.addEventListener("click",identifyZoomToOpen)
}

let indetifyZoomToClose = (ev) =>{
    let id = ev.path[1].id 

    if(id === "W1"){
        closeZoom(objectW1,ev)
    }else if(id === "W2"){
        closeZoom(objectW2,ev)
    }else if(id === "W3"){
        closeZoom(objectW3,ev)
    }else if(id === "W4"){
        closeZoom(objectW4,ev)
    }else if(id === "W5"){
        closeZoom(objectW5,ev)
    }else if(id === "W6"){
        closeZoom(objectW6,ev)
    }else if(id === "W7"){
        closeZoom(objectW7,ev)
    }else if(id === "W8"){
        closeZoom(objectW8,ev)
    }else{
        console.log("it's not here 2")
    }
}

let showZoom = (node) =>{
    node.video.classList.add("video")

    node.title.classList.add("h3")

    node.span.classList.add("span")

    node.text.classList.add("p")

    node.div.classList.add("zoom1");

    node.div.appendChild(closeButton);

    closeButton.addEventListener("click",indetifyZoomToClose)
    node.div.removeEventListener("click",identifyZoomToOpen)
}

let identifyZoomToOpen = (ev) =>{ 
    let idChild = ev.path[1].id 
    let idParent = ev.target.id

    if(idChild === "W1" || idParent === "W1"){
        showZoom(objectW1)
    }else if(idChild === "W2" || idParent === "W2"){
        showZoom(objectW2)
    }else if(idChild === "W3" || idParent === "W3"){
        showZoom(objectW3)
    }else if(idChild === "W4" || idParent === "W4"){
        showZoom(objectW4)
    }else if(idChild === "W5" || idParent === "W5"){
        showZoom(objectW5)
    }else if(idChild === "W6" || idParent === "W6"){
        showZoom(objectW6)
    }else if(idChild === "W7" || idParent === "W7"){
        showZoom(objectW7)
    }else if(idChild === "W8" || idParent === "W8"){
        showZoom(objectW8)
    }else{
        console.log("it's not here 1")
    }
}

objectW1.div.addEventListener("click",identifyZoomToOpen)
objectW2.div.addEventListener("click",identifyZoomToOpen)
objectW3.div.addEventListener("click",identifyZoomToOpen)
objectW4.div.addEventListener("click",identifyZoomToOpen)


//////////////////////////////////////////////
/////////////////LOADER///////////////////////
//////////////////////////////////////////////

let accountant = 0

let infoExtraWorkshops = [{
    name: "React",
    text: "Here You are going to learn the most popular ans useful framework to work with JS.",
    src : "MediaSources/videos/workshopA.mp4",
    id  : "W5"
},{
    name: "AI",
    text: "The machine learning is the future for apps and programms , learn how to develop it and handle it.",
    src : "MediaSources/videos/workshopB.mp4",
    id  : "W6"
},{
    name: "Figma",
    text: "The first step to everything is imagining, but the second is prototyping the idea.",
    src : "MediaSources/videos/workshopA.mp4",
    id  : "W7"
},{
    name: "HTML5",
    text: "The website structure is an art, learn how to be the master of this art in this workshop",
    src : "MediaSources/videos/workshopB.mp4",
    id  : "W8"
}
]

let objectW5 = {
    div: undefined,
    video : undefined,
    title : undefined,
    span : undefined,
    text : undefined
}
let objectW6 = {
    div: undefined,
    video : undefined,
    title : undefined,
    span : undefined,
    text : undefined
}
let objectW7 = {
    div: undefined,
    video : undefined,
    title : undefined,
    span : undefined,
    text : undefined
}
let objectW8 = {
    div: undefined,
    video : undefined,
    title : undefined,
    span : undefined,
    text : undefined
}

let remove = () => {
    loaderButton.removeEventListener("click",showClasses)
    loaderButton.remove()
}

let nodesCreator = (number) =>{ 
    const div = document.createElement("div");
    div.classList.add("workshop")
    div.id = `${infoExtraWorkshops[number].id}`

    const video = document.createElement("video");
    video.setAttribute("controls","");
    video.setAttribute("preload","auto");
    video.setAttribute("loop","");
    video.classList.add("workshop__video");
    video.src = `${infoExtraWorkshops[number].src}`;

    const h3 = document.createElement("h3");
    h3.classList.add("workshop__h3")
    h3.textContent= infoExtraWorkshops[number].name 

    const span = document.createElement("span");

    const p = document.createElement("p");
    p.classList.add("workshop__p")
    p.textContent = infoExtraWorkshops[number].text  

    h3.append(span)
    div.append(video,h3,p)

    switch (number) {
        case 0:
            objectW5.div = div;
            objectW5.video = video;
            objectW5.title = h3;
            objectW5.span = span;
            objectW5.text = p;
            objectW5.div.addEventListener("click",identifyZoomToOpen)
            break;
        case 1:
            objectW6.div = div;
            objectW6.video = video;
            objectW6.title = h3;
            objectW6.span = span;
            objectW6.text = p;
            objectW6.div.addEventListener("click",identifyZoomToOpen)
            break;
        case 2:
            objectW7.div = div;
            objectW7.video = video;
            objectW7.title = h3;
            objectW7.span = span;
            objectW7.text = p;
            objectW7.div.addEventListener("click",identifyZoomToOpen)
            break;
        case 3:
            objectW8.div = div;
            objectW8.video = video;
            objectW8.title = h3;
            objectW8.span = span;
            objectW8.text = p;
            objectW8.div.addEventListener("click",identifyZoomToOpen)
            break;
        default:
            break;
    }

    h3.appendChild(span);
    div.append(video,h3,p);

    loaderParent.appendChild(div);

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

