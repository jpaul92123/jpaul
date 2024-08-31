document.addEventListener('DOMContentLoaded', function () {
    fetch('/data/categorias.json')
        .then(response => response.json())
        .then(data => {
            const menuIds = ['menu-categorias', 'menu-categorias2'];

            menuIds.forEach(menuId => {
                const menu = document.getElementById(menuId);
                data.forEach(item => {
                    const menuItem = document.createElement('li');
                    menuItem.innerHTML = `<a href="${item.url}">├ ${item.nombre}</a>`;
                    menu.appendChild(menuItem);
                });
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});
