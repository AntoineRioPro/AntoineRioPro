const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');
const title = document.getElementById('title');
const title_project = document.getElementById('title-project');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

if (title) {
    title.addEventListener('click', () => {
        location.href = 'index.html';
    });
}
else if (title_project) {
    title_project.addEventListener('click', () => {
        location.href = '../index.html';
    });
}