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

let workshop1 = document.getElementById("W1");
let workshop2 = document.getElementById("W2");
let workshop3 = document.getElementById("W3");
let workshop4 = document.getElementById("W4");

let listOfWorkshops = [workshop1,workshop2,workshop3,workshop4]

// let deleteZoom= node =>{
//     node.classList.remove("zoom")
//     video.classList.add("video")
//     title.classList.add("h3")
//     span.classList.add("span")
//     text.classList.add("p")
// }

let closeButton = document.createElement("button")
closeButton.classList.add("button1")
// closeButton.addEventListener("click",deleteZoom)

let zoomItself= node =>{
    let video = node.querySelector("video")
    video.classList.add("video")

    let title = node.querySelector("h3")
    title.classList.add("h3")

    let span = node.querySelector("span")
    span.classList.add("span")

    let text = node.querySelector("p")
    text.classList.add("p")

    node.appendChild(closeButton);
    node.classList.add("zoom1");

}

let showZoom = (ev) =>{ 
    let idChild = ev.path[1].id 
    let idParent = ev.target.id

    if(idChild === "W1" || idParent === "W1"){
        zoomItself(listOfWorkshops[0])
    }else if(idChild === "W2" || idParent === "W2"){
        zoomItself(listOfWorkshops[1])
    }else if(idChild === "W3" || idParent === "W3"){
        zoomItself(listOfWorkshops[2])
    }else if(idChild === "W4" || idParent === "W4"){
        zoomItself(listOfWorkshops[3])
    }else{
        console.log("you are in showZoom FUNCTION")
    }
}

listOfWorkshops.map((v)=>{
    v.addEventListener("click",showZoom)
})

//////////////////////////////////////////////
let accountant = 0

let extraWorkshops = [{
    name: "React",
    text: "Here You are going to learn the most popular ans useful framework to work with JS.",
    src : "MediaSources/videos/workshopA.mp4"
},{
    name: "AI",
    text: "The machine learning is the future for apps and programms , learn how to develop it and handle it.",
    src : "MediaSources/videos/workshopB.mp4"
},{
    name: "Figma",
    text: "The first step to everything is imagining, but the second is prototyping the idea.",
    src : "MediaSources/videos/workshopA.mp4"
},{
    name: "HTML5",
    text: "The website structure is an art, learn how to be the master of this art in this workshop",
    src : "MediaSources/videos/workshopB.mp4"
}
]

let remove = () => {
    loaderButton.removeEventListener("click",showClasses)
    loaderButton.remove()
}

let nodesCreator = (number) => {

    const container = document.createElement("div");
    container.classList.add("workshop")

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

