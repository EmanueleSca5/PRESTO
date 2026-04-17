let navbar = document.querySelector(".navbar")
let navLink = document.querySelectorAll(".nav-link")
let logoNavbar = document.querySelector(".logoNavbar")
let card = document.querySelectorAll(".card")
let navbarToggler = document.querySelector(".navbar-toggler")
let navbarCollapse = document.querySelector(".navbar-collapse")
let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let num3 = document.querySelector("#num3")
let swiperWrapper = document.querySelector(".swiper-wrapper")
let swiperSlide = document.querySelector(".swiper-slide")
let cardReview = document.querySelector(".card-review")
// let imgCard = document.querySelectorAll(".img-card")
console.log(window);
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

card.forEach((card)=>{
    card.addEventListener("mouseenter", ()=>{
        let img = card.querySelector(".img-card")
        img.src = "./MEDIA/controller-red.png"
    })
    card.addEventListener("mouseleave", ()=>{
        let img = card.querySelector(".img-card")
        img.src = "./MEDIA/controller.png"
    })
})


//   CHIAMATE ASINCRONE: vengono eseguite solo dopo l intera compilazione del foglio JS
// setInterval(): crea un loop infinito in cui possiamo gestire la durata delle singole iterazioni
// il setInterval(), è una funzione che vuole 2 parametri, il primo è la callback, il secondo è l intervallo di tempo (parte da millisecondi (1 = 1 millisecondo)).

// clearInterval(): ha lo scopo di interrompere un setInterval()

// setTimeout: Fa partire un blocco di istruzioni dopo tot secondi


function createInterval(n, element, time){

    let counter = 0;
   let interval = setInterval(()=>{
        
    if(counter < n){
        counter++
    element.innerHTML = counter;
    }else{
        console.log("loop fermato");
        clearInterval(interval)
    }
    
}, time);

// il setTimeout dice che qualcosa puo tornare ad un valore solo dopo tot secondi
// ES: se confirm non è true, potrà tornare true solo dopo 12 secondi
    setTimeout(()=>{
        confirm = true;

    }, 6000)

} 



// IntersectionObserver: è una classe del browser che si occupa di far scattare una funzione nel momento in cui sul browser sono visibili gli elementi html che noi gli indichiamo
// new: è una keyword che mi permette di generare un oggetto partendo da una CLASSE
let confirm = true;

let observer = new IntersectionObserver((entries)=>{
    // usiamo forEach poiche il parametro è un array
    entries.forEach((entry)=>{
        // .isIntersecting vuol dire "quando è stato intersecato/incontrato"
        if(entry.isIntersecting && confirm){
            createInterval(1300, num1, 3)
            createInterval(300, num2, 12)
           createInterval(400, num3, 11)
           confirm = false
        }

    })
});

// .observe richiama tutta la intersectionObserver function
observer.observe(num1)

let reviews = [
    {nome : "Matteo", titolo : "Il miglior sito del mondo!!", voto : 5, desc : "lorem ipsum"},
    {nome : "Andrea", titolo : "Il peggior sito del mondo!!", voto : 2, desc : "lorem ipsum"},
    {nome : "Lucia", titolo : "Prodotti molto buoni", voto : 4, desc : "lorem ipsum"},
    {nome : "Luca", titolo : "Sono davver soddisfatto", voto : 5, desc : "lorem ipsum"},
]

reviews.forEach((recensione)=>{
    let div = document.createElement("div")
    div.classList.add("swiper-slide")

    
    div.innerHTML = `
    <div class="card-review">
    <p class="h3 nome-rec">${recensione.nome} </p>
    <p class="h4 rec">${recensione.titolo} </p>
    <div class="d-flex justify-content-center star">
    
    </div>
    <p class="rec h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate commodi possimus nesciunt, dolore quidem amet accusantium fugit explicabo numquam quas repellendus .</p>
    </div>
    `;
    
    swiperWrapper.appendChild(div)
    
    
})
let star = document.querySelectorAll(".star")

star.forEach((stella, index)=>{
    for(let i = 1; i <= reviews[index].voto; i++){
        let icon = document.createElement("i")
        icon.classList.add("fa-solid", "fa-star")
        icon.style.color = "var(--yl)";
        stella.appendChild(icon);
    }

    let difference = 5 - reviews[index].voto

     for(let i = 1; i <= difference; i++){
        let icon = document.createElement("i")
        icon.classList.add("fa-regular", "fa-star")
        icon.style.color = "var(--yl)";
        stella.appendChild(icon);
    }
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay : {
    delay : 5000,
  },
 effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});