
const navbarEl=document.querySelector(".navbar");
const btnEl=document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);
console.log(btnEl.offsetTop);

window.addEventListener("scroll", ()=>{
    if ("navbarEl") {
        if (window.scrollY> btnEl.offsetTop-navbarEl.offsetHeight-50) {
            navbarEl.classList.add("active");
        } else {
            navbarEl.classList.remove("active");   
        }
    }
    
});