function cambio() {
    var num = document.getElementById("num")
    var nums = document.getElementById("nums")
    var si = document.getElementById('si')
    var no = document.getElementById('no')
    var resultado = document.getElementById('resultado')
    var boton = document.getElementById('boton')
    var texto = document.getElementById('texto')

    num.value = ""
    nums.value = ""
    resultado.innerHTML = "0"
    si.innerHTML = "<br>"
    no.innerHTML = ""

    if (boton.textContent == 'BINARIO') {
        num.style.display = "block"
        nums.style.display = "none"
        boton.textContent = "HEXADECIMAL"
        texto.innerHTML = "Enter a binary number, get a decimal conversion"
    } else {
        num.style.display = "none"
        nums.style.display = "block"
        boton.textContent = "BINARIO"
        texto.innerHTML = "Enter a hexadecimal number, get a decimal conversion"
    }
}

function xd() {
    var num = document.getElementById('num').value
    var awebo = parseInt(num, 2)
    var si = document.getElementById('si')
    var no = document.getElementById('no')
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = awebo

    var res = num.charAt(num.length - 1)

    if (res == 1 || res == 0) {
        no.innerHTML = ""
        si.innerHTML = "Here is your decimal!"
    } else {
        no.innerHTML = "You entered a non-binari digit (please enter only 0 or 1)"
        si.innerHTML = ""
    }

}

function xdnt() {
    var nums = document.getElementById('nums').value
    var awebo = parseInt(nums, 16)
    var si = document.getElementById('si')
    var no = document.getElementById('no')
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = awebo

    var res = nums.charAt(nums.length - 1)

    if (res == 0 || res == 1 || res == 2 || res == 3 || res == 4 || res == 5 || res == 6 || res == 7 || res == 8 || res == 9 || res == "a" || res == "A" || res == "b" || res == "B" || res == "c" || res == "C" || res == "d" || res == "D" || res == "e" || res == "E" || res == "f" || res == "F") {
        no.innerHTML = ""
        si.innerHTML = "Here is your decimal!"
    } else {
        no.innerHTML = "You entered a non-hexadecimal digit (please enter only 0 to F)"
        si.innerHTML = ""
    }
}