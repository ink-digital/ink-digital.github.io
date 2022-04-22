const panels = document.querySelectorAll('.panel');
let cocktails = document.getElementById('cocktail_menu');
let snack = document.getElementById('snack_menu');
let wine = document.getElementById('wine_menu');
let deepURL = "https://open.spotify.com/embed/playlist/27aXJ7nauChngKusXXxD97?utm_source=generator&theme=0";
let monochromeURL = "https://open.spotify.com/embed/playlist/6KJw1k3RO61CGbX5OmycRs?utm_source=generator&theme=0";
let pearlURL = "https://open.spotify.com/embed/playlist/3DiVzct2KxMvgxOpBVezLv?utm_source=generator&theme=0";
let suiteURL = "https://open.spotify.com/embed/playlist/7yZhf78VtkvfUCsEy1AtZy?utm_source=generator&theme=0";
let nightcapURL = "https://open.spotify.com/embed/playlist/36qGazBhzzODIFcMMHwFS5?utm_source=generator&theme=0";
let glitterURL = "https://open.spotify.com/embed/playlist/5akFL82Wps7Qn23ai6uDkD?utm_source=generator&theme=0";
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
    musicSelect.innerHTML = isSelected;
  });
});

// function showSpinner() {
//   spinner.classList.remove('d-none');
//   formSubmit.disabled = true;
// }

function spotifyToggle(isSelected) {
  if (isSelected == "Monday - Monochrome") {
    document.querySelector('.spotify').src = monochromeURL;
  } else if (isSelected == "Tuesday - Pearl") {
    document.querySelector('.spotify').src = pearlURL;
  } else if (isSelected == "Wednesday - Deep") {
    document.querySelector('.spotify').src = deepURL;
  } else if (isSelected == "Thursday - Glitter") {
    document.querySelector('.spotify').src = glitterURL;
  } else if (isSelected == "Friday - Nightcap") {
    document.querySelector('.spotify').src = nightcapURL;
  } else if (isSelected == "Saturday - Suite") {
    document.querySelector('.spotify').src = suiteURL;
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
  const drinkCarousel = document.getElementById("carouselDrinks");
  const carousels = document.querySelectorAll('.carousel')
  carousels.forEach(carousel => carousel.classList.add('d-none'));
  drinkCarousel.classList.remove("d-none");
}

function snackSwitch() {
  const snacksCarousel = document.getElementById("carouselSnacks");
  const carousels = document.querySelectorAll('.carousel')
  carousels.forEach(carousel => carousel.classList.add('d-none'));

    snacksCarousel.classList.remove("d-none");

}

function wineSwitch() {
  const wineCarousel = document.getElementById("carouselWine");
  const carousels = document.querySelectorAll('.carousel')
  carousels.forEach(carousel => carousel.classList.add('d-none'));

    wineCarousel.classList.remove("d-none");

}

cocktails.addEventListener("click", cocktailSwitch);
snack.addEventListener("click", snackSwitch);
wine.addEventListener("click", wineSwitch);
musicSelect.addEventListener("select", spotifyToggle);
// formSubmit.addEventListener('click', showSpinner);