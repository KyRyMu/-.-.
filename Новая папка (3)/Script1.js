const drinks = [
    {
        name: "Кир",
        image: "kir drinks.JPG",
        category: "alcoholic",
        description: "Классический французский коктейль...",
        recipe: `
      <p><strong>Ингредиенты:</strong></p>
      <ul>
        <li>90 мл сухого белого вина (например, Aligoté)</li>
        <li>10 мл черносмородинового ликера (Crème de Cassis)</li>
      </ul>
      <p><strong>Приготовление:</strong></p>
      <ol>
        <li>Охладите бокал для вина.</li>
        <li>Налейте в бокал ликер Crème de Cassis.</li>
        <li>Долейте белое вино.</li>
        <li>Аккуратно перемешайте.</li>
      </ol>
    `,
        calcCard: `
      <p><strong>На 1 порцию:</strong></p>
      <ul>
        <li>Вино белое сухое - 90 мл</li>
        <li>Ликер Crème de Cassis - 10 мл</li>
      </ul>
    `
    },
    {
        name: "Французский 75",
        image: "french75.jpg",
        category: "alcoholic",
        description: "Освежающий коктейль с шампанским...",
        recipe: `
      <p><strong>Ингредиенты:</strong></p>
      <ul>
        <li>50 мл джина</li>
        <li>20 мл лимонного сока</li>
        <li>10 мл сахарного сиропа</li>
        <li>100 мл шампанского</li>
      </ul>
      <p><strong>Приготовление:</strong></p>
      <ol>
        <li>В шейкере смешайте джин, лимонный сок и сахарный сироп.</li>
        <li>Добавьте лед и хорошо встряхните.</li>
        <li>Перелейте в бокал для шампанского.</li>
        <li>Долейте шампанским.</li>
      </ol>
    `,
        calcCard: `
      <p><strong>На 1 порцию:</strong></p>
      <ul>
        <li>Джин - 50 мл</li>
        <li>Лимонный сок - 20 мл</li>
        <li>Сахарный сироп - 10 мл</li>
        <li>Шампанское - 100 мл</li>
      </ul>
    `
    },
    {
        name: "Café au Lait",
        image: "cafe_au_lait.jpg",
        category: "non-alcoholic",
        description: "Кофе с молоком по-французски...",
        recipe: `
      <p><strong>Ингредиенты:</strong></p>
      <ul>
        <li>100 мл крепкого кофе</li>
        <li>100 мл горячего молока</li>
      </ul>
      <p><strong>Приготовление:</strong></p>
      <ol>
        <li>Сварите крепкий кофе.</li>
        <li>Нагрейте молоко.</li>
        <li>Налейте кофе и молоко в чашку в равных пропорциях.</li>
      </ol>
    `,
        calcCard: `
      <p><strong>На 1 порцию:</strong></p>
      <ul>
        <li>Кофе - 100 мл</li>
        <li>Молоко - 100 мл</li>
      </ul>
    `
    },
    {
        name: "Jus d'orange",
        image: "jus_d_orange.jpg",
        category: "non-alcoholic",
        description: "Свежевыжатый апельсиновый сок",
        recipe: `
      <p><strong>Ингредиенты:</strong></p>
      <ul>
        <li>4 апельсина</li>
      </ul>
      <p><strong>Приготовление:</strong></p>
      <ol>
        <li>Вымойте апельсины.</li>
        <li>Разрежьте апельсины пополам.</li>
        <li>Выжмите сок с помощью соковыжималки или вручную.</li>
      </ol>
    `,
        calcCard: `
      <p><strong>На 1 порцию:</strong></p>
      <ul>
        <li>Апельсины - 4 шт.</li>
      </ul>
    `
    }
];

function createDrinkCard(drink, index) {
    const card = document.createElement('div');
    card.id = `card-${index + 1}`;
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
    details.style.display = "none";

    const recipeHeader = document.createElement('h4');
    recipeHeader.textContent = "Рецепт:";

    const recipeParagraph = document.createElement('p');
    recipeParagraph.innerHTML = drink.recipe; // Используем innerHTML для отображения HTML тегов

    const calcCardHeader = document.createElement('h4');
    calcCardHeader.textContent = "Калькуляционная карта:";

    const calcCardParagraph = document.createElement('p');
    calcCardParagraph.innerHTML = drink.calcCard; // Используем innerHTML

    details.appendChild(recipeHeader);
    details.appendChild(recipeParagraph);
    details.appendChild(calcCardHeader);
    details.appendChild(calcCardParagraph);

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(details);

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
        const card = createDrinkCard(drink, index);
        grid.appendChild(card);

        let startX, startY;
        if (index === 0) {
            startX = "-100%";
            startY = "0";
        } else if (index === 1) {
            startX = "100%";
            startY = "0";
        } else {
            startX = "0";
            startY = "100%";
        }

        gsap.fromTo(card,
            { x: startX, y: startY, opacity: 0 },
            {
                duration: 1.5,
                x: 0,
                y: 0,
                opacity: 1,
                ease: "power1.inOut",
                delay: index * 0.3
            }
        );
    });
}

addDrinkCards(drinks.filter(drink => drink.category === "alcoholic"), "alcoholic-grid");
addDrinkCards(drinks.filter(drink => drink.category === "non-alcoholic"), "non-alcoholic-grid");

document.getElementById("back-to-main").addEventListener("click", function () {
    window.location.href = "main.html";
});