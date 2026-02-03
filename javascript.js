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

function onHoverItem () {
    console.log(this.id);
    document.querySelector(`#${this.id}`).classList.remove("squares");
    document.querySelector(`#${this.id}`).classList.add("newSquares");
};

const divs = document.querySelectorAll("#container > div");
divs.forEach((item) => item.addEventListener("mouseover", onHoverItem)
);
