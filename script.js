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

