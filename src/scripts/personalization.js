// let listContents = [
//   "Background",
//   "Colors",
//   "Themes",
//   "Dynamic Lighting",
//   "Lock screen",
//   "Text input",
//   "Start",
//   "Taskbar",
//   "Fonts",
//   "Device usage",
// ];

settingsMainContent[4].append(container);
container.setAttribute("class", "mainSettingOptionUl");
for (let i = 0; i < listContents.length; i++) {
  let mainContents = document.createElement("li");
  mainContents.innerText = listContents[i];
  mainContents.setAttribute("class", "mainSettingOptionLi");
  container.append(mainContents);
}
