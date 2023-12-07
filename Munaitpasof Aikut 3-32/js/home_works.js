const gmail_input = document.querySelector('#gmail_input')
const gmail_button = document.querySelector('#gmail_button')
const gmail_result = document.querySelector('#gmail_result')
    const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
gmail_button.onclick = () => {
    if (regExp.test(gmail_input.value)) {
        gmail_result.innerHTML = 'Всё правильно'
        gmail_result.style.color = 'green'
    }else {
        gmail_result.innerHTML = 'Вы ошиблись'
        gmail_result.style.color = 'red'
    }
}
//нажмите на квадрат если не смотрели Ван пис
const child_block = document.querySelector('.child_block')
let currentPosition = 0
const moveRight = () => {
            if (currentPosition < 298) {
                currentPosition += 1
        child_block.style.left = currentPosition + 'px'
        setTimeout(moveRight, 10)
    }
}
moveRight()
