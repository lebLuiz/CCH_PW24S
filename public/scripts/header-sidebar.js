const navbar = document.querySelector('.wrapper-links');
const btn_sidebar_open = document.querySelector('.btn-open-sidebar');

function incluirEventoClickHeaderSidebar() {
    document.body.addEventListener('click', ($el) => {
        if (navbar.contains($el.target) || btn_sidebar_open.contains($el.target))
            return;
        fecharSidebar();
    });
}

function abrirSidebar() {
    navbar.classList.add('--open');
}

function fecharSidebar() {
    navbar.classList.remove('--open');
}

window.onload = () => {
    incluirEventoClickHeaderSidebar();
}