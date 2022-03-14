const panels = document.querySelectorAll('.panel');
let cocktails = document.getElementById('cocktail_menu');
let snack = document.getElementById('snack_menu');
let wine = document.getElementById('wine_menu');
let bottles = document.getElementById('bottle_menu');

panels.forEach((panel) => {

    panel.addEventListener('mouseover', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
    
    panel.addEventListener('mouseout', () => {
        removeActiveClasses();
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

function cocktailSwitch() {
    document.getElementById("menu-image").src="/images/menus/cocktails.jpg";
}

function snackSwitch() {
    document.getElementById("menu-image").src="/images/menus/snacks.jpg";
}

function wineSwitch() {
    document.getElementById("menu-image").src="/images/menus/wine_1.jpg";
}

function bottleSwitch() {
    document.getElementById("menu-image").src="/images/menus/bottle_service.jpg";
}

cocktails.addEventListener("click", cocktailSwitch);
snack.addEventListener("click", snackSwitch);
wine.addEventListener("click", wineSwitch);
bottles.addEventListener("click", bottleSwitch);