const toggleButtons = document.querySelectorAll('.toggleBtn')

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling
        answer.classList.toggle('answer')
        if (answer.classList.contains('answer')) {
            answer.style.display = 'block'
            button.textContent = 'Скрыть ответ'
        } else {
            answer.style.display = 'none'
            button.textContent = 'Показать ответ'
        }
    })
})