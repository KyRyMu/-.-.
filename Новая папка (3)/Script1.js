const drinks = [
    {
        name: "Кир",
        image: "kir drinks.JPG",
        category: "alcoholic",
        description: "Классический французский коктейль...",
        recipe: "Смешайте белое вино с черносмородиновым ликером...", // Добавьте настоящий рецепт
        calcCard: "Вино - 100 мл, ликер - 20 мл..." // Добавьте настоящую калькуляционную карту
    },
    {
        name: "Французский 75",
        image: "french75.jpg",
        category: "alcoholic",
        description: "Освежающий коктейль с шампанским...",
        recipe: "Смешайте джин, лимонный сок, сахарный сироп и шампанское...", // Добавьте настоящий рецепт
        calcCard: "Джин - 50 мл, лимонный сок - 20 мл, сироп - 10 мл, шампанское - 100 мл..." // Добавьте настоящую калькуляционную карту
    },
    {
        name: "Café au Lait",
        image: "cafe_au_lait.jpg",
        category: "non-alcoholic",
        description: "Кофе с молоком по-французски...",
        recipe: "Сварите крепкий кофе, добавьте горячее молоко...", // Добавьте настоящий рецепт
        calcCard: "Кофе - 100 мл, молоко - 100 мл..." // Добавьте настоящую калькуляционную карту
    },
       {
        name: "Jus d'orange",
        image: "jus_d_orange.jpg",
        category: "non-alcoholic",
        description: "Свежевыжатый апельсиновый сок",
        recipe: "Выжмите сок из свежих апельсинов...",
        calcCard: "Апельсины - 4 шт."
    }
    // ... другие напитки
];

function createDrinkCard(drink) {
    const card = document.createElement('div');
    card.classList.add('drink-card');

    const img = document.createElement('img');
    img.src = drink.image;
    img.alt = drink.name;

    const title = document.createElement('h3');
    title.textContent = drink.name;

    const description = document.createElement('p');
    description.textContent = drink.description;

    const details = document.createElement('div');
    details.classList.add('details');
    details.style.display = "none"; // Изначально скрываем детали

    const recipeHeader = document.createElement('h4');
    recipeHeader.textContent = "Рецепт:";

    const recipeParagraph = document.createElement('p');
    recipeParagraph.textContent = drink.recipe;

    const calcCardHeader = document.createElement('h4');
    calcCardHeader.textContent = "Калькуляционная карта:";

    const calcCardParagraph = document.createElement('p');
    calcCardParagraph.textContent = drink.calcCard;

    details.appendChild(recipeHeader);
    details.appendChild(recipeParagraph);
    details.appendChild(calcCardHeader);
    details.appendChild(calcCardParagraph);

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(details); // Добавляем блок details в карточку

    card.addEventListener('click', () => {
        const details = card.querySelector('.details');
        if (details.style.display === "none") {
            gsap.to(details, { duration: 0.5, height: "auto", opacity: 1, ease: "power1.inOut" });
            details.style.display = "block";
        } else {
            gsap.to(details, {
                duration: 0.5,
                height: 0,
                opacity: 0,
                ease: "power1.inOut",
                onComplete: () => {
                    details.style.display = "none";
                }
            });
        }
    });

    return card;
}

function addDrinkCards(drinks, gridId) {
    const grid = document.getElementById(gridId);
    drinks.forEach((drink, index) => {
        const card = createDrinkCard(drink);
        grid.appendChild(card);

        // Определяем начальное положение карточки в зависимости от индекса
        let startX, startY;
        if (index === 0) { // Карточка слева
            startX = "-100%";
            startY = "0";
        } else if (index === 1) { // Карточка справа
            startX = "100%";
            startY = "0";
        } else { // Карточка снизу
            startX = "0";
            startY = "100%";
        }

        gsap.fromTo(card,
            { x: startX, y: startY, opacity: 0 },
            {
                duration: 1.5,  //  Длительность анимации
                x: 0,
                y: 0,
                opacity: 1,
                ease: "power1.inOut",  //  Тип смягчения
                delay: index * 0.3   //  Задержка для каждой карточки
            }
        );
    });
}

addDrinkCards(drinks.filter(drink => drink.category === "alcoholic"), "alcoholic-grid");
addDrinkCards(drinks.filter(drink => drink.category === "non-alcoholic"), "non-alcoholic-grid");
document.getElementById("back-to-main").addEventListener("click", function () {
    window.location.href = "main.html"; // Замени "index.html" на имя файла главной страницы
});