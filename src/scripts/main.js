const settingsChoices = document.querySelectorAll(".settingsChoices");
const contents = document.querySelectorAll(".contents");
const indicator = document.querySelectorAll(".indicator");
let title = document.getElementById("title");

//---Initialize
indicator[0].style.display = "flex";
system();

for (let i = 0; i < settingsChoices.length; i++) {
  settingsChoices[i].addEventListener("click", () => {
    // Remove 'liActive' class from all elements
    for (let j = 0; j < settingsChoices.length; j++) {
      settingsChoices[j].classList.remove("liActive");
      contents[j].classList.remove("activeContents");
      indicator[j].style.display = "none";
    }

    // Add 'liActive' class to the clicked element
    settingsChoices[i].classList.add("liActive");
    contents[i].classList.add("activeContents");
    indicator[i].style.display = "flex";
  });
}
