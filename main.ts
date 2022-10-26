let n1 = 0
let n2 = 0
let suma = 0
function nombres () {
    n1 = randint(0, 10)
    n2 = randint(0, 10)
    basic.showNumber(n1)
    basic.showString("+")
    basic.showNumber(n2)
}
input.onButtonPressed(Button.A, function () {
    nombres()
})
input.onButtonPressed(Button.B, function () {
    suma2()
})
function suma2 () {
    suma = n1 + n2
    basic.showNumber(suma)
}
basic.forever(function () {
	
})
