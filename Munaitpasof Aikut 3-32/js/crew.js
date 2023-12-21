function displayCharacters(characters) {
    const charactersDiv = document.getElementById('characters');

    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');

        const name = document.createElement('h2');
        name.textContent = character.name;
        characterCard.appendChild(name);

        const age = document.createElement('p');
        age.textContent = `Age: ${character.age}`;
        characterCard.appendChild(age);

        // Добавьте другие данные, если необходимо

        charactersDiv.appendChild(characterCard);
    });
}

// Путь к локальному файлу JSON
const url = 'data/peoples.json';

// Асинхронная загрузка JSON-файла
// fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Ошибка HTTP: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         displayCharacters(data);
//     })
//     .catch(error => {
//         console.error('Ошибка загрузки данных:', error);
//     });

