// let listContents = ["Game Bar", "Captures", "Game Mode"];
// let listIcons = ["Game Bar", "Captures", "Game Mode"];
// let listDescriptions = ["Game Bar", "Captures", "Game Mode"];

settingsMainContent[8].append(container);
container.setAttribute("class", "mainSettingOptionUl");
for (let i = 0; i < listContents.length; i++) {
  let mainContents = document.createElement("li");
  mainContents.innerText = listContents[i];
  mainContents.setAttribute("class", "mainSettingOptionLi");
  container.append(mainContents);
}
