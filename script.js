let toggleBtn=document.querySelector(".toggle-btn");
let removeBadge=document.querySelector(".button-badge-right");

toggleBtn.addEventListener("click",()=>{
    // console.log("A");
    removeBadge.classList.toggle("hidden");
})