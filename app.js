const nav = document.getElementById("navbar");
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const plan = document.querySelector(".plan");


if (menu) {
    menu.addEventListener('click', () => {
        nav.classList.add('active'); 
        plan.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        plan.classList.remove('active'); 
    })
}