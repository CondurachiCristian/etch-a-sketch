const container = document.querySelector("#container");

function makeDivColumn (num) {
    for (let j = 0; j < num; j++) {
        makeDivRow(num);
    }
};

function makeDivRow (num) {
    for (let i = 0; i < num; i++) {
        const total = 100;
        let divisor = num;
        let times = Math.floor(total / divisor);
        const div = document.createElement("div");
        div.setAttribute("style", `flex : 1 0 ${times}%; padding-bottom : ${times}%;`);
        div.className = "squares";
        container.appendChild(div);
    }
};

makeDivColumn(16);

function makeNewGrid () {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    let input = prompt("Enter a number for the new Grid");
    if (input > 100 || input < 0) {
        alert("Please select a number lower than 100 and higher than 0");
    } else if (!isNaN(input)) {
        makeDivColumn(input);
        const divs = document.querySelectorAll("#container > div");
        divs.forEach((item) => item.addEventListener("mouseover", onHoverItem));  } else {
        alert("Please enter a number");
    }
};

function onHoverItem () {
    this.classList.remove("squares");
    this.classList.add("newSquares");
};

const divs = document.querySelectorAll("#container > div");
divs.forEach((item) => item.addEventListener("mouseover", onHoverItem));

const btn = document.querySelector("#btn");
btn.addEventListener("click" , makeNewGrid);