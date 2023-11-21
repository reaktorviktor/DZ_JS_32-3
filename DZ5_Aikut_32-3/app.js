function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates)
console.log(arrayWithoutDuplicates)
function filterBooks(arr) {
    const booksWithU = arr.filter(book => book.toLowerCase().includes('у'))
    const otherBooks = arr.filter(book => !book.toLowerCase().includes('у'))

    const booksWithUWithText = booksWithU.map(book => `${book} - книга с буквой "у"`)

    console.log('Книги с буквой "у":')
    booksWithUWithText.forEach(book => console.log(book))

    console.log('\nОстальные книги:')
    otherBooks.forEach(book => console.log(book))
}
const books = [
    'Поднятие уровня в одиночку',
    'Авто прокачка с клонами',
    'Сильнейший в псих болнице',
    'Я не талантлив',
    'Наруто',
    'Убить героя',
    'Убийца Акаме',
    'Моя геройская академия',
]
filterBooks(books)
const users = [
    { name: 'Эймон', age: 25 },
    { name: 'Вейл', age: 30 },
    { name: 'Икс борг', age: 20 },
    { name: 'Готокча', age: 35 },
    { name: 'Госсен', age: 22 },
    { name: 'Грейрейнджер', age: 28 },
    { name: 'Франко', age: 40 },
    { name: 'Нана', age: 19 }
]
const youngestUser = users.reduce((youngest, user) => (user.age < youngest.age ? user : youngest))
console.log(`\nСамый молодой пользователь: ${youngestUser.name}, возраст ${youngestUser.age} лет`)
const oldestUser = users.reduce((oldest, user) => (user.age > oldest.age ? user : oldest))
console.log(`Самый старый пользователь: ${oldestUser.name}, возраст ${oldestUser.age} лет`)
const ageDifference = Math.abs(youngestUser.age - oldestUser.age)
console.log(`Разница в возрасте: ${oldestUser.name} старше ${youngestUser.name} на ${ageDifference} лет`)
