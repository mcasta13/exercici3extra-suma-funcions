let suma = 0
let n1 = 0
let n2 = 0
input.onButtonPressed(Button.A, function () {
    nombresatzar()
})
function suma1 () {
    suma = n1 + n2
    basic.showNumber(suma)
}
function nombresatzar () {
    n1 = randint(0, 10)
    n2 = randint(0, 10)
    basic.showNumber(n1)
    basic.showString("+")
    basic.showNumber(n2)
}
input.onButtonPressed(Button.B, function () {
    suma1()
})
basic.forever(function () {
	
})
