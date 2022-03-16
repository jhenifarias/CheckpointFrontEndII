/* quando clicar no menu, SELECIONAR classe (queryselector para armazenar dentro da variavel depois manipular com eventlistener) 

1. **(20pts)** Esta sessão deverá ser apresentada sempre que houver o click no **botão Menu**: `<button class="l-sidebar__btn"type="button">Menu</button>`. 
1.1. Quando houver o click do usuário, a sidebar deverá ser apresentada: `<div class="l-sidebar">` */

    var menu = document.querySelector('lSideBar');
    menu.addEventListener('click', openMenu);

    function openMenu(event) {
        console.log(event);
        menu = 'teste';
    }


    
    /* menu.addEventListener("click", function() {}); */
   
