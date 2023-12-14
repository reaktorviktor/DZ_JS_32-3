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
