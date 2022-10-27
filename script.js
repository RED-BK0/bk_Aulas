const itens = [ 
    {
         Image: "",
         Name: "Animewoman",
         Price: "R$ 100,00",
         Type: "actions",
    },
    {
         Image: "",
         Name: "Dragonball",
         Price: "R$ 150,00",
         Type: "actions",
    },
    {
         Image: "",
         Name: "Starwars",
         Price: "R$ 110,00",
         Type: "actions",
        
    },
    {  
         Image: "",
         Name: "Relógio",
         Price: "R$ 120,00",
         Type: "painting",
     },
     {
         Image: "",
         Name: "Gamepad",
         Price: "R$ 130,00",
         Type: "painting",
     },
     {
         Image: "",
         Name: "Robo",
         Price: "R$ 160,00",
         Type: "painting",
     }];
    
const listFigures = [];
const listFrames  = []; 


function separateItens(list){
    
    //Percorrendo a lista de paintigs
    for (let i = 0; i < list.length; i++){
        
        //Acessando paintigs
        let paintig = list[i]
        
        if(list[i].Type == "actions"){
            listFigures.push(list[i])
            
        }
        if(list[i].Type == "painting"){
            listFrames.push(list[i])
        }
        
    }
}
separateItens(itens)



//funçao para paintings
function criarPaintingCard(item, price, imageName){
   
    //Listando Paintigs
    const listaPaintigs = document.querySelector(".listaPaintigs")
    
    const section = document.getElementById("seçaoPaintigs")
    const ul = document.createElement("ul")
    ul.classList.add("listaPaintigs") 

    //criando elementos
    const li  = document.createElement("li")
    const img = document.createElement("img")
    const h3  = document.createElement("h3")
    const div = document.createElement("div")
    const p   = document.createElement("p")
    
    //criar classes
    div.classList.add("info")

    //adicionar elementos  
    section.appendChild(ul)
    section.appendChild(li)
    ul.appendChild(li)
    li.appendChild(img)
    li.appendChild(h3)
    li.appendChild(div)
    div.appendChild(p)

    //adicionar valores
    const text = document.createTextNode(item)
    h3.appendChild(text)
    const textP = document.createTextNode(price)
    p.appendChild(textP)
    
    // alimentando tags com as informações 
    img.src = `./assets/img/painting/${imageName}.jpg` 

    return li

}

const listaActions = document.querySelector(".listaActions")

const section = document.getElementById("seçaoActions")
const ul = document.createElement("ul")
ul.classList.add("listaActions")

//funçao para actions
function criarActionsCard(item, price, imageName){

    //criando elementos
    const section = document.getElementById("seçaoActions")
    const ul = document.createElement("ul")
    const li  = document.createElement("li")
    const img = document.createElement("img")
    const h3  = document.createElement("h3")
    const div = document.createElement("div")
    const p   = document.createElement("p")
    
    //criar classes
    div.classList.add("info")

    //adicionar elementos  
    section.appendChild(ul)
    section.appendChild(li)
    ul.appendChild(li)
    li.appendChild(img)
    li.appendChild(h3)
    li.appendChild(div)
    div.appendChild(p)

    //adicionar valores
    const text = document.createTextNode(item)
    h3.appendChild(text)
    const textP = document.createTextNode(price)
    p.appendChild(textP)
    
    // alimentando tags com as informações 
    img.src = `./assets/img/actions/${imageName}.jpg` 

    return li

}
//criarPaintingCard("produto", "R$ 250,00", "")
 for (let i = 0; i < listFrames.length; i++){
    const produto = listFrames[i]
    criarPaintingCard(produto.Name, produto.Price, produto.Image)
 }
 
 for (let i = 0; i < listFigures.length; i++){
    const produto = listFigures[i]
    criarPaintingCard(produto.Name, produto.Price, produto.Image)
 }



//   <h2>Paintigs</h2>
// <ul class="listaPaintigs">
//     <li>
//         <img src="./assets/img/painting/clock.jpg" alt="">
//         <h3>Item</h3>
//         <div class="info">
//             <p>Valor Item </p>
//         </div>
//     </li>            
// </ul> 
    







