const container = document.querySelector("#container");
function createPixels(number){
    for(let i=0; i<(number*number); i++){
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.height =`${640/number}px`;
    pixel.style.width =`${640/number}px`;
    container.append(pixel);
};
const allPixels = document.querySelectorAll(".pixel");
allPixels.forEach(pixel=>{
    pixel.addEventListener("mouseenter",()=>{
    pixel.style.backgroundColor = "black";
    })
});
}

createPixels(16);

const setPixels = document.createElement("button");
setPixels.setAttribute("id","setPixels");
setPixels.textContent = "Set Pixels";
document.body.insertBefore(setPixels,container);

setPixels.addEventListener("click", () =>{

    const userInput = parseInt(prompt("Set how many squares you want per side","16"));

    if(userInput>100){
        alert("Maximum legth is 100");
    };

    const allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach(element => {
        element.remove();
    })
    createPixels(userInput);
});

const clear = document.createElement("button");
clear.setAttribute("id","clear");
clear.textContent = "Clear";
document.body.insertBefore(clear,container);


clear.addEventListener("click", () => {
    const allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach(element => {
        element.style.backgroundColor = "white";
    })
})