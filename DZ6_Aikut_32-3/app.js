const createButton = document.querySelector('#create_button')
const input = document.querySelector('#input')
const todoList = document.querySelector('.todo_list')

const createTodo = () => {
    if(input.value.trim() === ''){
        return alert('Произошла ошибка, введите какой-нибудь текст')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButton = document.createElement('div')
    divButton.setAttribute('class', 'div_button')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    deleteButton.innerText = 'DELETE'

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')
    editButton.innerText = 'EDIT'

    const text = document.createElement('h3')
    text.innerText = input.value
    text.addEventListener('click', ()=>{
        text.classList.toggle('toggle')
    })

    deleteButton.addEventListener('click', ()=>{
        div.remove()
    })

    editButton.addEventListener('click', ()=>{
        const editForm = document.createElement('form')
        editForm.setAttribute('class', 'edit_form')

        const editInput = document.createElement('input')
        editInput.setAttribute('class', 'edit_input')
        editInput.setAttribute('type', 'text')
        editInput.setAttribute('value', text.innerText)

        const editSubmit = document.createElement('button')
        editSubmit.setAttribute('class', 'edit_submit')
        editSubmit.setAttribute('type', 'submit')
        editSubmit.innerText = 'Submit'

        editForm.append(editInput, editSubmit)
        div.append(editForm)

        editForm.addEventListener('submit', (event)=>{
            event.preventDefault()
            const newText = editInput.value
            if(newText){
                text.innerText = newText
            }
            editForm.remove()
        })
    })

    divButton.append(deleteButton, editButton)
    div.append(text, divButton)

    todoList.prepend(div)
    input.value = ''
}

createButton.onclick = () => createTodo()

input.addEventListener('keydown', (event)=>{
    if(event.code === 'Enter'){
        createTodo()
    }
})