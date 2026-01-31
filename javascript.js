const container = document.querySelector("#container");

function makeDiv () {
    const div = document.createElement("div");
    
    div.className = "square";
    //div.style = "background-color: red;";
    //div.style.width = "10px";
    //div.style.height = "10px";
    container.appendChild(div);
};

function makeManyDivs (times) {
    for (let i = 0; i < times; i++) {
        makeDiv();
    }
};

makeManyDivs(256);