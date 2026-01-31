const container = document.querySelector("#container");

function makeDivs (times) {
    for (let i = 0; i < times; i++) {
        const div = document.createElement("div");
        div.id = `div${i+1}`;
        div.className = "squares";
        container.appendChild(div);
    }
};

makeDivs(256);

function changeClass (hoveredDiv) {
    hoveredDiv.classList.remove("squares");
    hoveredDiv.classList.add("newSquares");
};

/* const divs = document.querySelector("#div");
divs.addEventListener("mouseover", function () {
    divs.classList.remove("square");
    divs.classList.add("newSquare");
}); */