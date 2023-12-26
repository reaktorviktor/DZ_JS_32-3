document.addEventListener('DOMContentLoaded', function() {
    const charactersContainer = document.getElementById('characters-container');

    function createCharacterCard(character) {
        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h3');
        name.textContent = ` ${character.name}`;
        card.appendChild(name);

        const image = document.createElement('img');
        image.src = character.photo;
        image.alt = character.name + ' photo';
        card.appendChild(image);

        const age = document.createElement('p');
        age.textContent = `Age: ${character.age}`;
        card.appendChild(age);

        const job = document.createElement('p');
        job.textContent = `Job: ${character.job}`;
        card.appendChild(job);

        const race = document.createElement('p');
        race.textContent = `Race: ${character.race}`;
        card.appendChild(race);

        const bounty = document.createElement('p');
        bounty.textContent = `Bounty: ${character.bounty}`;
        card.appendChild(bounty);

        return card;
    }

    function displayCharacters(characters) {
        characters.forEach(character => {
            const card = createCharacterCard(character);
            charactersContainer.appendChild(card);
        });
    }

    // Подставьте ваш реальный URL сервера или путь к JSON файлу
    fetch('/data/peoples.json')
        .then(response => response.json())
        .then(data => {
            displayCharacters(data);
        })
});
