let navbar = document.querySelector(".navbar")
let navLink = document.querySelectorAll(".nav-link")
let logoNavbar = document.querySelector(".logoNavbar")

console.log(window);
window.addEventListener("scroll" , ()=>{
    let scrolled = window.scrollY;

    if(scrolled > 0){
        navbar.classList.remove("bg-black")
        navbar.classList.add("bg-yellow")
        navbar.style.height = "80px"

        navLink.forEach((link)=>{
            link.classList.remove("text-yl")
            link.classList.add("text-bk")
        })

        logoNavbar.src = "logoscroll.png"
        

    }else{
        navbar.classList.remove("bg-yellow")
        navbar.classList.add("bg-black")
        navbar.style.height = "140px"
        
         navLink.forEach((link)=>{
            link.classList.remove("text-bk")
            link.classList.add("text-yl")

        logoNavbar.src = "logo.png"

        })
    }
    
})
