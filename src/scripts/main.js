const settingsChoices = document.querySelectorAll(".settingsChoices");
// const mainContainer = document.querySelectorAll(".mainContainer");
const contents = document.querySelectorAll(".contents");
const indicator = document.querySelectorAll(".indicator");
let title = document.getElementById("title");

//---Initialize
indicator[0].style.display = "flex";
// system();
// bluetoothAndDevices();
// networkAndInternet();

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

