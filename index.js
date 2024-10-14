const Nikzad = document.querySelector(".ahmadreza");
const shownikzad = document.querySelectorAll(".icons a");
function show(){
    shownikzad.forEach((item)=>{
        
        item.addEventListener("mouseover", ()=>{
            Nikzad.style="opacity:0.8;top:-100px;transition:all 0.3s;"
        })
        item.addEventListener("mouseout", ()=>{
            Nikzad.style="opacity:0;top:-200px;transition:all 0.3s;"
        })

    })
}
show();