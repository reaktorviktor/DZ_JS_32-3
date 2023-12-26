// MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal()
const handleScroll = () => {
    const isPageEnd = window.innerHeight + window.scrollY >= document.body.offsetHeight
    if (isPageEnd) {
        openModal()
        window.removeEventListener('scroll', handleScroll)
    }
}
window.addEventListener('scroll', handleScroll)

// const form = document.querySelector('form')

// const postData = (formElement) => {
//     formElement.addEventListener('submit', (event) => {
//     event.preventDefault()
//         const request = new XMLHttpRequest()
//         request.open('POST', 'server.php')
//         request.setRequestHeader('Content-type', 'application/json')
//
//         const formData = new FormData(formElement)
//         const obj = {}
//         formData.forEach((item, index) => {
//             obj[index] = item
//         })
//         const json = JSON.stringify(obj)
//         request.send(json)
// })
// }
// postData(form)
// const form = document.querySelector('form')
// const postdata = (url, data) => {
//     fetch(url, {
//
//     })
// }
//
// const bindPostData = (formElement) => {
//     formElement.onsubmit = (event) => {
//         event.preventDefault()
//         const
//     }
// }