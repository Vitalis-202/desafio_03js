const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')

const cambiaColor = (box)=>{
    box.style.backgroundColor = "#000"
}

box1.addEventListener('click',()=>{
    cambiaColor(box1)
})
box2.addEventListener('click',()=>{
    cambiaColor(box2)
})
box3.addEventListener('click',()=>{
    cambiaColor(box3)
})
box4.addEventListener('click',()=>{
    cambiaColor(box4)
})
//Cambiar color
const key = document.getElementById('key')
contenedor = document.getElementById("contenedor");

const teclaColor = (tecla)=>{
    if (tecla === 'a') {
        key.style.backgroundColor = 'pink'
    } else if(tecla === 's'){
        key.style.backgroundColor = 'orange'
    }else if(tecla === 'd'){
        key.style.backgroundColor = 'lightblue'
    }
}

//Agregar div
const agregarElemento = (tecla) => {
    
    nuevoElemento = document.createElement("div")
    nuevoElemento.classList.add('box');
    contenedor.appendChild(nuevoElemento)
    //Morado purple, gris gray, cafe brown
    if(tecla === 'q'){
        nuevoElemento.style.backgroundColor = 'purple'
    } else if(tecla === 'w'){
        nuevoElemento.style.backgroundColor = 'gray'
    }else if(tecla ==='e'){
        nuevoElemento.style.backgroundColor = 'brown'
    }
}

//Eventos de teclado
document.addEventListener("keydown", (event)=> {

    if (event.key === "a" || event.key === "A") {
        teclaColor('a');
    } else if (event.key === "s" || event.key === "S") {
        teclaColor('s');
    }else if (event.key === "d" || event.key === "d") {
        teclaColor('d');
    }else{

    }

    if (event.key === "q" || event.key === "Q") {
        agregarElemento('q');
    } else if (event.key === "w" || event.key === "W") {
        agregarElemento('w');
    }else if (event.key === "e" || event.key === "E") {
        agregarElemento('e');
    }else{
        
    }
    
});