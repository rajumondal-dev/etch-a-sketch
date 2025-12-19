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

const buttonContainer = document.querySelector("#buttonContainer");
const setPixels = document.createElement("button");
setPixels.setAttribute("id","setPixels");
setPixels.textContent = "Set Pixels";
buttonContainer.append(setPixels);

setPixels.addEventListener("click", () =>{

    let userInput = parseInt(prompt("Set how many squares you want per side","16"));

    if(isNaN(userInput) || userInput < 1){
        alert("Please enter a valid number");
        return;
    }

    if(userInput>100){
        userInput = 100;
        alert("Maximum length is 100");
    }

    document.querySelectorAll(".pixel").forEach(pixel => pixel.remove());
    createPixels(userInput);
});

const clear = document.createElement("button");
clear.setAttribute("id","clear");
clear.textContent = "Clear";
buttonContainer.append(clear);


clear.addEventListener("click", () => {
    const allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach(element => {
        element.style.backgroundColor = "white";
    })
})