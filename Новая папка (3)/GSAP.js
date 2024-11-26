// JavaScript source code
gsap.fromTo(cards, { opacity: 0, y: 50 }, {
    opacity: 1,
    y: 0,
    duration: 2,
    stagger: 0.5,
    delay: 1
});
// Для всех элементов с классом "hover-card"
const hoverCards = document.querySelectorAll('.hover-card');

hoverCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -10, duration: 0.3 });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.3 });
    });
});
// Получаем все элементы с классом "typed-text" (например, заголовки)
const typedTexts = document.querySelectorAll('.typed-text');

// Для каждого элемента создаем анимацию
typedTexts.forEach(text => {
    gsap.fromTo(text.textContent.split(''), { opacity: 0, y: 10 }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05, // Задержка между буквами
        ease: 'power2.out'
    });
});