window.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector("section");
    const nbBox = 24;
    // Créer un tableau de 1 à 24 (k = key / v = value)
    const entier=Array.from({length: 24}, (k, v) => v + 1);
    //Melanger le tableau "entier" sans doublons
    let shuffle = entier.sort(() => Math.random() - 0.5);
    

    
    

    let colors = ["#48c9b0",
                    "#FF5733ce",
                    "#d7bde2ce",
                    "#d5d8dcce",
                    "#FFC300ce",
                    "#d7bde2ce",
                    "#95a5a6ce",
                    "#f6ddccce",
                    "#5dade2ce",
                    "#e74c3cce",
                    "#d2b4dece",
                    "#641e16ce",
                    "#76448ace",
                    "#1e8449ce"
                ]


    for(let i = 1; i <= nbBox; i++){

        // creer un element de type div
        let box = document.createElement("div");
        let image =document.createElement("img");

        //on attribut le calsse box a cet elelment
        box.classList.add("box");

        image.classList.add("image");
        
        image.src = "./img/image" +i+ ".jpg"
        
        //on ajoute du contenue dans l'elemt box
        box.innerHTML = shuffle[i-1];

        // recupère un index aléatoire dans le tableau de couleurs "colors"
        let randomIndex = Math.floor(Math.random() * colors.length)

        //attibue une couleur de fond à l'indice aléatoire à la div "box"
        box.style.backgroundColor = colors[randomIndex]

        //on ajoute l'element box dans la section
        box.appendChild(image)
        section.appendChild(box);

        box.addEventListener("click", () =>{
            box.classList.toggle("active");
        })
    }
          
})