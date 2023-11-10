//dz2-1

var month = prompt('enter month').toLowerCase()
switch (month) {
    case 'ноябрь':
    case 'декабрь':
    case 'январь':
        console.log('зима')
        break
    case 'март':
    case 'апрель':
    case 'февраль':
        console.log('весна')
        break
    case 'июнь':
    case 'июль':
    case 'май':
        console.log('лето')
        break
    case 'сентябрь':
    case 'октябрь':
    case 'август':
        console.log('осень')
        break
    default:
        console.log('Доступны только месяца')
}

//dz2-2

var array = [[[[[[[[[[[2]]]]]]]]]]]
console.log(array[0][0][0][0][0][0][0][0][0][0][0])

//dz2-3git

function colkulator() {
    var num1 = Number(prompt('ведите первое число'))
    var num2 = Number(prompt('ведите второе число'))
    var operation = prompt('выберете операцию +,-,/,*')
    var result
    if (isNaN(num1) || isNaN (num2)) {
        alert ('Вы вели неправильно')
        return
    }
    switch (operation) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
        if (num2 !== 0){
            result = num1 / num2
        } else {
            alert ('Деить на 0 нельзя')
            return
        }
        break
        default:
            alert ('можно только +,-,/,*')
            return
    }
    alert(result)
}
colkulator()