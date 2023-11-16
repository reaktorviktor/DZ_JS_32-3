var array = ["name", "John", "lastname", "Black", "age", "23"]
var resultObject = {}
for (var i = 0; i < array.length; i += 2) {
    var key = array[i]
    var value = array[i + 1]
    resultObject[key] = value
}
console.log(resultObject)
function average() {
    if (arguments.length === 0) {
        console.log("Не переданы числа для вычисления среднего")
        return
    }
    var sum = 0
    var count = arguments.length
    for (var i = 0; i < count; i++) {
        sum += arguments[i]
    }
    var avg = sum / count
    console.log("Среднее арифметическое:", avg)
}

function getDataType(param) {
    console.log(typeof param)
}
getDataType(false)
getDataType('hello world!')
getDataType(42)

document.addEventListener('DOMContentLoaded', function() {
    var counterInput = document.getElementById('counterInput')
    var increaseBtn = document.getElementById('increaseBtn')
    var decreaseBtn = document.getElementById('decreaseBtn')

    increaseBtn.addEventListener('click', function() {
        counterInput.value = parseInt(counterInput.value) + 1
    });

    decreaseBtn.addEventListener('click', function() {
        counterInput.value = parseInt(counterInput.value) - 1
    })
})