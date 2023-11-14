var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

var tagCount = new Map();

for (var tag of tags) {
    tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
}

console.log(Object.fromEntries(tagCount.entries()));

function Starbucks() {
    var menu = {
        coffee: {
            americano: "Одна-две порции эспрессо с горячей водой,создадут сильный,насыщенный вкус.",
            latte: "Кофейный напиток, приготовленный из эспрессо и парового молока.",
            cappuccino: "Приготовлено из эспрессо и молочной пены на пару.",
            mocha: "Эспрессо, смешанный с шоколадом и молоком на пару, посыпанный взбитыми сливками."
        },
        tea: {
            blackTea: "Полностью окисленный чай со смелым вкусом.",
            greenTea: "Неокисленный чай с более свежим и нежным вкусом.",
            chaiTea: "Пряный чай, приготовленный с использованием ароматных специй, молока и подсластителей.",
            herbalTea: "Настой трав, фруктов и другого растительного сырья."
        }
    }
    return {
        menu: menu,
        takeOrderFromConsole: function() {
            var input = prompt("Ведите названия вашего кофе или чая")
            var found = false
            for (var type in this.menu) {
                if (this.menu[type].hasOwnProperty(input)) {
                    prompt(`Ваш заказ принят ${input} ${type}: ${this.menu[type][input]}`)
                    found = true
                    break
                }
            }
            if (!found) {
                prompt(`Ошибка ткого напитка нету в меню.`)
            }
        }
    }
}
var myStarbucks = Starbucks()
myStarbucks.takeOrderFromConsole()





