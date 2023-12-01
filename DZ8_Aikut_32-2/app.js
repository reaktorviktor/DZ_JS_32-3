function changeColor() {
    const square = document.querySelector('.square')
    const colorCode = document.getElementById('colorCode')
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
    square.style.backgroundColor = randomColor
    if (randomColor === '#000000') {
        colorCode.style.color = '#ffffff'
    } else {
        colorCode.style.color = '#000000'
    }
    colorCode.textContent = randomColor
}
