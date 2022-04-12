const panels = document.querySelectorAll('.panel');
let cocktails = document.getElementById('cocktail_menu');
let snack = document.getElementById('snack_menu');
let wine = document.getElementById('wine_menu');
let deepURL = "https://open.spotify.com/embed/playlist/27aXJ7nauChngKusXXxD97?utm_source=generator&theme=0";
let selectValue = document.getElementById('night-select').value;
let musicSelect = document.getElementById('night-select');
let spotifySrc = document.querySelector('.spotify').src;
let spotifyPlay = document.querySelector('.spotify').title;
let nightList = document.getElementsByClassName('night');
let formSubmit = document.querySelector('.resoSubmit');
let spinner = document.querySelector('.spinner-border');

Array.from(nightList).forEach((night) => {
  night.addEventListener('click', (event) => {
    isSelected = event.target.innerText;
    spotifyToggle(isSelected);
  });
});

function showSpinner() {
  spinner.classList.remove('d-none');
  formSubmit.disabled = true;
}

// Old Code

// panels.forEach((panel) => {
//     panel.addEventListener('mouseover', () => {
//         panel.classList.remove('col-2');
//         panel.classList.add('isActive');s
//         // panel.classList.add('active-panel');
//     });

//     panel.addEventListener('mouseout', () => {
//             // removeActiveClasses();
//             panel.classList.add('col-2');
//             panel.classList.remove('isActive');
//     });   
// });

// function removeActiveClasses() {
//     panels.forEach((panel) => {
//         panel.addEventListener('mouseout', () => {
//             panel.classList.remove('active-panel');
//         });
//     });
// }

function spotifyToggle(isSelected) {
  if (isSelected == "Wednesday - Deep") {
    document.querySelector('.spotify').src = deepURL;
  }
}

function toggleOpen() {
  const panels = document.querySelectorAll('.panel')
  panels.forEach(panel => panel.classList.remove('open'))
  this.classList.toggle('open')
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))

function cocktailSwitch() {
  document.getElementById("menu-image").src = "/images/menus/cocktails.jpg";
}

function snackSwitch() {
  document.getElementById("menu-image").src = "/images/menus/snacks.jpg";
}

function wineSwitch() {
  document.getElementById("menu-image").src = "/images/menus/wine_1.jpg";
}

cocktails.addEventListener("click", cocktailSwitch);
snack.addEventListener("click", snackSwitch);
wine.addEventListener("click", wineSwitch);
musicSelect.addEventListener("select", spotifyToggle);
formSubmit.addEventListener('click', showSpinner);