window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');

    setTimeout(function () {
        loader.style.display = 'none';
    }, 500);
});

document.addEventListener('DOMContentLoaded', function () {
    const tl = gsap.timeline();

    const cards = document.querySelectorAll('.card');
    tl.fromTo(cards, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
    });


    gsap.to(".floating-item", {
        duration: 10,
        x: "random(0, 100%)",
        y: "random(0, 100%)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % 100),
            y: gsap.utils.unitize(y => parseFloat(y) % 100)
        }
    });

    const typedText = document.querySelector('.typed-text');
    tl.fromTo(typedText, {
        opacity: 0
    }, {
        opacity: 1,
        duration: 1,
        onComplete: () => {
            gsap.fromTo(typedText.textContent.split(''), {
                opacity: 0,
                y: 10
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: 'power2.out'
            });
        }
    });
});