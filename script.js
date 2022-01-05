const toogleBtn = document.getElementsByClassName("toggle-btn")[0]
const navBarlinks = document.getElementsByClassName("navbar-links")[0]

toogleBtn.addEventListener("click", ()=>{
    navBarlinks.classList.toggle("active")
})