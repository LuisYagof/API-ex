const WRAPPERresult = document.querySelector(".wrapperResult");
const INPUT = document.querySelector("#searcher");
const BUTTONsearch = document.querySelector("#buttonSearch");

function fetchSouth(character) {
    fetch(`https://spapi.dev/api/characters/${character}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        printElem(data)
    });
}  

function printElem (data) {
    let title = document.createElement("a")
    let content = document.createTextNode(data.data.full_name)
    title.appendChild(content)
    WRAPPERresult.appendChild(title)
}

BUTTONsearch.addEventListener("click", function() {
    fetchSouth(INPUT.value);
})


// let value = 0;
// if (INPUT.value === "cartman" || INPUT.value === "CARTMAN") {
//     return = 1;
// }