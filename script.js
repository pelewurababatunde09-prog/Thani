const observer= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
        }else{
            entry.target.classList.remove('animate');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.about-inner,.services-list').forEach((element) => {
    observer.observe(element);
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = menuToggle.querySelector('i');

const setMenuOpen = (isOpen) => {
    mobileMenu.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    menuIcon.classList.toggle('fa-bars', !isOpen);
    menuIcon.classList.toggle('fa-xmark', isOpen);
};

menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
});


const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll',() => {
    if(window.scrollY> 400){
        scrollBtn.classList.add('visible');
    } else{
        scrollBtn.classList.remove('visible')
    }
});