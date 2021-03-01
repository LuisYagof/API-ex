const SUPERwrapper = document.querySelector(".superWrapper");
const WRAPPERresult = document.querySelector(".wrapperResult");
const INPUT = document.querySelector("#searcher");
const BUTTONsearch = document.querySelector("#buttonSearch");
const BUTTONreset = document.querySelector("#buttonReset");

function fetchData(character) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
    .then(response => response.json())
    .then(data => {
        data.results.map(elem => printSearch(elem))
    });
}  

function printSearch (elem) {
    let box = document.createElement("div")
    box.setAttribute("class", "general")
    WRAPPERresult.appendChild(box)

    let title = document.createElement("h2")
    let content = document.createTextNode(elem.name)
    title.appendChild(content)
    box.appendChild(title)
    
    title.addEventListener("click", function(){
        printDetail(elem)
        goBack()
    })
}

function printDetail (det) {
    let wrapper = document.createElement("div")
    wrapper.setAttribute("class", "wrapperDet")
    SUPERwrapper.appendChild(wrapper)
    
    let box = document.createElement("div")
    wrapper.appendChild(box)

    let title = document.createElement("h2")
    let content = document.createTextNode(det.name)
    title.appendChild(content)
    box.appendChild(title)

    let pic = document.createElement("img")
    pic.setAttribute("src", det.image)
    box.appendChild(pic)

    let status = document.createElement("p")
    let statusC = document.createTextNode(`Status: ${det.status}`)
    status.appendChild(statusC)
    box.appendChild(status)

    let species = document.createElement("p")
    let statusSp = document.createTextNode(`Species: ${det.species}`)
    species.appendChild(statusSp)
    box.appendChild(species)

    let gender = document.createElement("p")
    let genderC = document.createTextNode(`Gender: ${det.gender}`)
    gender.appendChild(genderC)
    box.appendChild(gender)

    let back = document.createElement("button")
    let backC = document.createTextNode(`Atrás`)
    back.appendChild(backC)
    box.appendChild(back)

    back.addEventListener("click", function(){
        WRAPPERresult.classList.remove("dissap")
        WRAPPERresult.classList.add("wrapperResult")
        wrapper.remove()

    })

}

function goBack () {
    // let boxes = document.querySelectorAll(".general")
    // boxes.classList.remove("")
    WRAPPERresult.setAttribute("class", "dissap")

    // for (i=0; i<dissap.length; i++){
    //     dissap[i].remove()
    // }
}

function resetSearch() {
    // WRAPPERresult.remove();
    // let wrapper = document.createElement("div")
    // wrapper.setAttribute("class", "wrapperResult")
    // SUPERwrapper.appendChild(wrapper)

    WRAPPERresult.querySelectorAll('*').forEach(n => n.remove())
}

BUTTONsearch.addEventListener("click", function() {
    fetchData(INPUT.value);
})

BUTTONreset.addEventListener("click", resetSearch)


// ChildNode.replaceWith()