// let listContents = ["Date & time", "Language & region", "Typing", "Speech"];
// let listIcons = ["Date & time", "Language & region", "Typing", "Speech"];
// let listDescriptions = ["Date & time", "Language & region", "Typing", "Speech"];

settingsMainContent[7].append(container);
container.setAttribute("class", "mainSettingOptionUl");
for (let i = 0; i < listContents.length; i++) {
  let mainContents = document.createElement("li");
  mainContents.innerText = listContents[i];
  mainContents.setAttribute("class", "mainSettingOptionLi");
  container.append(mainContents);
}
