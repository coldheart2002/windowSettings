const settingsChoices = document.querySelectorAll(".settingsChoices");
// const mainContainer = document.querySelectorAll(".mainContainer");
const contents = document.querySelectorAll(".contents");
const indicator = document.querySelectorAll(".indicator");
let title = document.getElementById("title");
let settingsMainContent = document.querySelectorAll(".settingsMainContent");
//---Initialize
indicator[0].style.display = "flex";
const close = document.querySelector(".close");
// close.style.opacity = 0;

//---SET THEME
let body = document.querySelector("body");
setTheme();
function setTheme() {
  body.setAttribute("class", localStorage.getItem("activeTheme"));
}

//--CREATE THEME OPTIONS
let themesArray = [
  "lightTheme",
  "darkTheme",
  "rubyTheme",
  "natureTheme",
  "amberTheme",
];
let themeContainer = document.querySelector(".themeContainer");
for (let i = 0; i < themesArray.length; i++) {
  let theme = document.createElement("div");
  theme.setAttribute("class", "theme " + themesArray[i]);
  let theme2 = document.createElement("div");
  theme2.setAttribute("class", "theme2");
  theme.append(theme2);
  themeContainer.append(theme);
}
//--TOGGLE THEME
let themes = document.querySelectorAll(".theme");
for (let i = 0; i < themes.length; i++) {
  themes[i].addEventListener("click", () => {
    //remove active theme
    for (let j = 0; j < themes.length; j++) {
      themes[j].classList.remove("activeTheme");
    }
    themes[i].classList.add("activeTheme");
    localStorage.setItem("activeTheme", themesArray[i]);
    setTheme();
  });
}

//--CONTENT TOGGLE
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

//---RENAME PC FUNCTION
let renamePc = document.querySelectorAll(".rename");
let pcName = document.querySelectorAll(".pcName");
for (let i = 0; i < pcName.length; i++) {
  pcName[i].innerText = localStorage.getItem("pcName") || "AcerExtensa-NEO";
}
let renameContainer = document.querySelector(".renameContainer");
let newPcNameInput = document.querySelector(".newPcNameInput");
let cancelNewPcName = document.querySelector(".cancelNewPcName");
let confirmNewPcName = document.querySelector(".confirmNewPcName");
function pcRename() {
  renameContainer.style.display = "block";
  cancelNewPcName.addEventListener("click", () => {
    renameContainer.style.display = "none";
  });
  confirmNewPcName.addEventListener("click", () => {
    newPcName = newPcNameInput.value;
    if (newPcName === "") {
    } else {
      if (newPcName.length <= 15) {
        // newPcName.style.color = "red";
        localStorage.setItem("pcName", newPcName);
        for (let i = 0; i < pcName.length; i++) {
          pcName[i].innerText = newPcName;
        }
      } else {
        alert("Must not exceed 15 characters");
      }
    }
    renameContainer.style.display = "none";
    newPcNameInput.value = "";
  });
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
