const ele = document.getElementById('ele1')

// function pintar(){
//     ele.style.backgroundColor = 'yellow'
// }

const pintar = (color = 'green')=>{
    ele.style.backgroundColor = color
}

document.addEventListener('DOMContentLoaded',()=>{
    pintar();
})

ele.addEventListener('click',()=>{
    pintar('yellow')
})