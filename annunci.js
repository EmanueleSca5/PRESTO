let navbar = document.querySelector(".navbar")
let navLink = document.querySelectorAll(".nav-link")
let logoNavbar = document.querySelector(".logoNavbar")
let navbarToggler = document.querySelector(".navbar-toggler")
let navbarCollapse = document.querySelector(".navbar-collapse")



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

// .json: JavaScript object Notification

// API: chiavi che ci permettono di raggiungere un .json online

// fetch(): Chiamata asincrona che ci permette di collegarci ad un JSON e da esso estrarne il dato sotto forma di Promise.

// .then(): Questo metodo permette di convertire la promise nel dato strutturale e di poterlo utilizzare come tale in JS.

// 1. fetch()= mi collego al json e ne ottengo una Promise
// 2. .then()= converto la promise in un dato strutturale JS
// 3. .then()= utilizzare il dato ottuenuto

fetch("./annunci.json").then((response)=> response.json()).then((data)=>{
    
    let wrapperAcc = document.querySelector(".wrapperAcc")
    let cardWrapper = document.querySelector("#cardWrapper")
    
    function radioCreate(){
        let category = data.map((annuncio)=> annuncio.category);
        console.log(category);
        
        
        //    let categorieuniche = []
        //     category.forEach((categoria)=>{
            //     if(!categorieuniche.includes(categoria)){
        //         categorieuniche.push(categoria)
        //     }
        //    })
        //    console.log(categorieuniche);
        
        //    categorieuniche
        
        // Set(): Classe che mi restituisce, partendo da un array, un nuovo oggetto di tipo SET il quale contiene solo valori univoci
        
        let categorieuniche = Array.from(new Set(category))
        console.log(categorieuniche);
        
        // essendo set un arraylike non possiamo usare i metodi degli array pewrcio per trasformalre un array like in un array possiamo usare Array.from():
        
        for(let i = 0; i < categorieuniche.length; i++){
            let div = document.createElement("div")
            div.classList.add("form-check")
            div.innerHTML = `
                <input class="form-check-input" type="radio" name="radioDefault" id="${categorieuniche[i]}">
  <label class="form-check-label" for="${categorieuniche[i]}">
    ${categorieuniche[i]}
  </label>
                `
            wrapperAcc.appendChild(div)
            
        }
    }
        
    radioCreate();
        function showCards(array){
            cardWrapper.innerHTML = " "
            array.forEach((dato, i)=>{
                let div = document.createElement("div")
                div.classList.add("card-cst")
                div.innerHTML = `
                        <img src="https://picsum.photos/200/${300 + i}"
                        <p class="h2" title="${dato.prodotto}">${dato.prodotto}</p>
                        <p class="h5 text-start">${dato.category} </p>
                        <p class="h4">Desc prod</p>
                        <p class="h5"> ${dato.price}$</p>
                    `
                
                cardWrapper.appendChild(div)
            })
        }
    showCards(data)

    let radiobuttons = document.querySelectorAll(".form-check-input");

    
    function filterByCategory(array){
        // in questa funzione ho bisogno di ottnere un nuovo array partendo da data e gli elementi del nuovo array dovranno soddisfare kla condizione per la quale la loro category sia uguale alla categoria che stiamo passando alla funzione

        // la categoria voglio trovarla partendo dalla lista di tutti i bottoni e usare il metodo .find() degli array su questa lista. la condizione da utilizzare è il bottone con l attributo checked
        let categoria = Array.from(radiobuttons).find((button)=> button.checked ).id;
        console.log(categoria);
        

        if(categoria != "All"){

            let filtered = array.filter((annuncio)=> annuncio.category == categoria)
            return filtered
        }else{
            return array
        }
        
    }
    


    radiobuttons.forEach((button)=>{
        button.addEventListener("click", ()=>{
        globalFilter();            
        })
    })

    let prezzo = document.querySelector(".prezzo")
    let priceInput = document.querySelector("#price")

    function setPriceInput(){
        // Dopo aver catturato l input voglio settare come prorpieta max dello stesso il valore piu alto tra i price di ogni prodotto. Per farlo avro quindi bisogno di un array che contenga solo i prezzi, a quel punto lo ordino in maniera cresceente o descrescente e prendermi l elemento con il valore piu alto.

        let prices = data.map((dato)=>+dato.price);
        prices.sort((a, b)=> a - b)
        let maxprice = Math.max(...prices)
        console.log(maxprice);
        
        console.log(prices);

        priceInput.max = maxprice;
        priceInput.value = maxprice;
        prezzo.innerHTML = maxprice;
    }
    setPriceInput()

    function filterByPrice(array){
        let filtered = array.filter((dato)=> +dato.price <= priceInput.value);
        return filtered;
    }

    priceInput.addEventListener("input", ()=>{
        globalFilter()
        prezzo.innerHTML = priceInput.value
    })

    let wordInput = document.querySelector("#wordInput")
    function filterByWord(array){
        let filtered = array.filter((dato)=> dato.prodotto.toLowerCase().includes( wordInput.value.toLowerCase()))
        return filtered;
    }
     
    wordInput.addEventListener("input", ()=>{
    globalFilter()

    })

    // quello di cui abbiamo bisogno è che ad ogni evento scattino tutte e 3 le funzioni di filtro ma non che siano applicate tutte e tre sull array data, bensi siano concatenate ed ognuna filtri il risultato della funzione di filtro precedente

    function globalFilter(){
        let byCategory = filterByCategory(data);
        let byPrice = filterByPrice(byCategory); 
        let byWord = filterByWord(byPrice);

        showCards(byWord)
    }
    globalFilter()
})

// MOCKAROO Random generator json
