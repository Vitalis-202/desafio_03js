// Ejercicio #01
let contador = 0
const img_ej1 = document.querySelector('.img_ej1')
const btn_ej1 = document.querySelector('#btn_ej1')
btn_ej1.addEventListener('click',()=>{

    if (contador == 0) {
        img_ej1.style.border = '2px solid red'
        contador++
    } else {
        img_ej1.style.border = 'none'
        contador--
    }
})
//Ejercicio #02
let input_1 = document.querySelector('#input_1')
let input_2 = document.querySelector('#input_2')
let input_3 = document.querySelector('#input_3')
const btn_ej2 = document.querySelector('#btn_ej2')
let resultado = document.querySelector('#resultado_ej2')
let suma = 0
btn_ej2.addEventListener('click',()=>{
    suma = Number(input_1.value) + Number(input_2.value) + Number(input_3.value)
    console.log(suma)
    if ( suma <= 10) {
        resultado.innerHTML = 'Llevas ' + suma + ' stickers.'  
    } else {
        resultado.innerHTML = 'Llevas demasiados stickers.'  
    }
    suma = 0
})
//Ejercicio #03
let select_1 = document.querySelector('#select_1')
let select_2 = document.querySelector('#select_2')
let select_3 = document.querySelector('#select_3')
const btn_ej3 = document.querySelector('#btn_ej3')
let resultado_ej3 = document.querySelector('#resultado_ej3')
let seleccionado_1 = select_1.value
let seleccionado_2 = select_2.value
let seleccionado_3 = select_3.value

btn_ej3.addEventListener('click',()=>{
    
    select_1 = document.querySelector('#select_1')
    select_2 = document.querySelector('#select_2')
    select_3 = document.querySelector('#select_3')
    seleccionado_1 = select_1.value
    seleccionado_2 = select_2.value
    seleccionado_3 = select_3.value


    console.log(seleccionado_1 + seleccionado_2 + seleccionado_3)
    if ( seleccionado_1 == 9 && seleccionado_2 == 1 && seleccionado_3 == 1) {
        resultado_ej3.innerHTML = 'Password 1 correcto'  
    } else if ( seleccionado_1 == 7 && seleccionado_2 == 1 && seleccionado_3 == 4){
        resultado_ej3.innerHTML = 'Password 2 correcto'
    } else {
        resultado_ej3.innerHTML = 'Password incorrecto'  
    }
    suma = 0
})