const settingsChoices = document.querySelectorAll(".settingsChoices");
// const mainContainer = document.querySelectorAll(".mainContainer");
const contents = document.querySelectorAll(".contents");
const indicator = document.querySelectorAll(".indicator");
let title = document.getElementById("title");
let settingsMainContent = document.querySelectorAll(".settingsMainContent");
//---Initialize
indicator[0].style.display = "flex";

const close = document.querySelector(".close");
close.style.opacity = 0;

for (let i = 0; i < settingsChoices.length; i++) {
  settingsChoices[i].addEventListener("click", () => {
    // Remove 'liActive' class from all elements
    for (let j = 0; j < settingsChoices.length; j++) {
      settingsChoices[j].classList.remove("liActive");
      contents[j].classList.remove("activeContents");
      contents[j].style.zIndex = 100;
      indicator[j].style.display = "none";
    }

    // Add 'liActive' class to the clicked element
    settingsChoices[i].classList.add("liActive");
    contents[i].style.zIndex = 0;
    contents[i].classList.add("activeContents");
    indicator[i].style.display = "flex";
  });
}

let theme = document.getElementById("switchTheme");

theme.addEventListener("click", () => {
  if (document.body.classList.contains("darkMode")) {
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");
  } else {
    document.body.classList.remove("lightMode");
    document.body.classList.add("darkMode");
  }
});

let renamePc = document.querySelectorAll(".rename");

function pcRename() {
  let newPcName = prompt("Enter Name:");
  let pcName = document.querySelectorAll(".pcName");

  if (!newPcName) {
    alert("cannot be empty!");
  } else {
    for (let i = 0; i < pcName.length; i++) {
      pcName[i].innerText = newPcName;
    }
  }
}

for (let i = 0; i < renamePc.length; i++) {
  renamePc[i].addEventListener("click", pcRename);
}

//bluetoothToogle
let defaultBtnToogle = document.querySelector(".defaultBtnToogle");
let defaultBtnIndicator = document.querySelector(".defaultBtnIndicator");
let defaultBtnOff = document.querySelector(".defaultBtnOff");
let bluetoothDescriptionStatus = document.querySelector(
  ".bluetoothDescriptionStatus"
);
defaultBtnToogle.addEventListener("click", () => {
  if (defaultBtnOff.classList.contains("defaultBtnOff")) {
    defaultBtnOff.classList.remove("defaultBtnOff");
    defaultBtnOff.classList.add("defaultBtnOn");
    defaultBtnIndicator.innerText = "On";
    bluetoothDescriptionStatus.innerText = 'Discoverable as "coldHeart"';
  } else {
    defaultBtnOff.classList.add("defaultBtnOff");
    defaultBtnOff.classList.remove("defaultBtnOn");
    defaultBtnIndicator.innerText = "Off";
    bluetoothDescriptionStatus.innerText = "Bluetooth is turned off";
  }
});
