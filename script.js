function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (let el of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const offset = 150
        if (elementTop < windowHeight - offset) {
        el.classList.add('active');
        } else {
        el.classList.remove('active');
        }
    }
}

window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);