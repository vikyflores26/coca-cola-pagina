let cocazero = document.querySelector('#cocazero')
let cocaImagen = document.querySelector('.coca')

let imagenCambiada = false
cocazero.onclick = function () {
    if (imagenCambiada == false) {
        cocaImagen.src = "Coca Zero.png"
        imagenCambiada = true
    }else{
        cocaImagen.src = "camilo.png"
        imagenCambiada = false
    }
}
