let navbar = document.querySelector(".navbar")
let navLink = document.querySelectorAll(".nav-link")
let logoNavbar = document.querySelector(".logoNavbar")
let navbarToggler = document.querySelector(".navbar-toggler")
let navbarCollapse = document.querySelector(".navbar-collapse")
let opener = document.querySelector(".opener")
let circle = document.querySelector(".circle")
let flipCard = document.querySelector(".flip-card")
let teacher = [
    {   
        nome : "Matteo",
        desc : "Lorem ipsum",
        url : "./MEDIA/anonymous.jpg"
    },
     {   
        nome : "Luca",
        desc : "Lorem ipsum",
        url : "./MEDIA/ownernintendo.jpg"
    },
     {   
        nome : "Andrea",
        desc : "Lorem ipsum",
        url : "./MEDIA/ownerps.jpg"
    },
     {   
        nome : "Paolo",
        desc : "Lorem ipsum",
        url : "./MEDIA/billgates.jpg"
    },
];

teacher.forEach((docente)=>{
    let div = document.createElement("div")
    div.classList.add("moved")
    div.style.backgroundImage = `url(${docente.url})`
    circle.appendChild(div)
    
})

let moved = document.querySelectorAll(".moved")
let plus = document.querySelector(".plus")
let innerFace = document.querySelector(".inner-face")
let innerBack = document.querySelector(".inner-back")
let inner = document.querySelector(".inner")
let info = document.querySelector(".info")

moved.forEach((move , i)=>{
    move.addEventListener("click", ()=>{
        innerFace.innerHTML = ""
        innerBack.innerHTML = ""
        let div = document.createElement("div")
        div.innerHTML = `<img src="${teacher[i].url}" class= "imgflip img.fluid  " alt="">
        `
        

        innerFace.appendChild(div)

         if(check2 == false){
        inner.style.transform = `rotateY(0deg)`
        innerBack.classList.remove("opacity")
        innerBack.classList.add("opacity")

        check2 = true
    }else{
        inner.style.transform = `rotateY(0deg)`
        innerBack.classList.add("opacity")

        
    }

    })
})

moved.forEach((move, i)=>{
    move.addEventListener("click", ()=>{

        let divback = document.createElement("div")
        divback.classList.add("d-flex","justify-content-center","flex-column","align-items-center")
        divback.innerHTML = `
        <h3 class="h2 text-yl mb-5">${teacher[i].nome}</h3>
            <p class="h3 text-yl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident beatae facilis ullam dolores molestias voluptatibus, voluptatum sequi expedita ratione sint pariatur dolorum quod culpa nihil, hic corporis rerum!</p>
        `
        innerBack.appendChild(divback)
    })
})

check2 = true
innerBack.classList.add("opacity")
flipCard.addEventListener("click" , ()=>{
    if(check2 == true){
        inner.style.transform = `rotateY(180deg)`
        innerBack.classList.remove("opacity")
        check2 = false
    }else{
        inner.style.transform = `rotateY(0deg)`
        innerBack.classList.add("opacity")

        check2 = true
    }
})

let check = true
opener.addEventListener("click", ()=>{
     if(check == true){
        info.classList.add("d-none")
        inner.classList.remove("d-none")
         moved.forEach((move, i)=>{
        angle = (360 * i) / moved.length
            move.style.transform = `
            rotate(${angle}deg) translate(300px) rotate(-${angle}deg)
            `;
            opener.style.transform = `
            rotate(45deg)
            `
        })
        check = false
        }else{
            info.classList.remove("d-none")
            inner.classList.add("d-none")
            moved.forEach((move, i)=>{
            move.style.transform = `
            none
            `;
            opener.style.transform = `
            none
            `
        })
    
        check = true
       
}})

navbar.style.position = "sticky"
window.addEventListener("scroll" , ()=>{
    let scrolled = window.scrollY;
    
    if(scrolled > 1){
        navbar.classList.remove("bg-black")
        navbar.classList.add("bg-yellow")
        navbar.style.height = "80px"
        
        navLink.forEach((link)=>{
            link.classList.remove("text-yl")
            link.classList.add("text-bk")
        })
        navbarCollapse.classList.remove("bg-black")
        
        navbarCollapse.classList.add("bg-yellow")
        logoNavbar.src = "./MEDIA/logoscroll.png"
        
        
    }else{
        navbar.classList.remove("bg-yellow")
        navbar.classList.add("bg-black")
        navbar.style.height = "140px"
        
        navLink.forEach((link)=>{
            link.classList.remove("text-bk")
            link.classList.add("text-yl")
            
            navbarCollapse.classList.add("bg-black")
            navbarCollapse.classList.remove("bg-yellow")
            logoNavbar.src = "./MEDIA/logo.png"
            
        })
    }
    
})