personalization();
function personalization() {
  let settingsMainContent = document.querySelectorAll(".settingsMainContent");
  let container = document.createElement("ul");
  settingsMainContent[4].append(container);
  container.setAttribute("class", "mainSettingOptionUl");
  let listContents = [
    "Background",
    "Colors",
    "Themes",
    "Dynamic Lighting",
    "Lock screen",
    "Text input",
    "Start",
    "Taskbar",
    "Fonts",
    "Device usage",
  ];
  for (let i = 0; i < listContents.length; i++) {
    let mainContents = document.createElement("li");
    mainContents.innerText = listContents[i];
    mainContents.setAttribute("class", "mainSettingOptionLi");
    container.append(mainContents);
  }
}
