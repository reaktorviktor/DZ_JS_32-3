document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-btn')
    const deleteButtons = document.querySelectorAll('.delete-btn')
    const modal = document.getElementById('modal')
    const closeBtn = document.getElementById('close')
    const saveBtn = document.getElementById('saveBtn')
    const editText = document.getElementById('editText')
    const newText = document.getElementById('newText')
    let currentItem
    editButtons.forEach((button) => {
        button.addEventListener('click', function() {
            currentItem = this.parentElement
            const currentText = currentItem.querySelector('span').textContent
            editText.value = currentText
            modal.style.display = 'block'
        })
    })
    deleteButtons.forEach((button) => {
        button.addEventListener('click', function() {
            this.parentElement.remove()
        })
    })
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none'
    })
    saveBtn.addEventListener('click', function() {
        const newContent = newText.value
        currentItem.querySelector('span').textContent = newContent
        modal.style.display = 'none'
    })
})
