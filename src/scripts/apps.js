// let listContents = [
//   "Installed apps",
//   "Advanced app settings",
//   "Default apps",
//   "Offline maps",
//   "Optional features",
//   "Apps for websites",
//   "Video playback",
//   "Startup",
// ];
// let listIcons = [
//   "Installed apps",
//   "Advanced app settings",
//   "Default apps",
//   "Offline maps",
//   "Optional features",
//   "Apps for websites",
//   "Video playback",
//   "Startup",
// ];
// let listDescriptions = [
//   "Installed apps",
//   "Advanced app settings",
//   "Default apps",
//   "Offline maps",
//   "Optional features",
//   "Apps for websites",
//   "Video playback",
//   "Startup",
// ];

settingsMainContent[5].append(container);
container.setAttribute("class", "mainSettingOptionUl");
for (let i = 0; i < listContents.length; i++) {
  let mainContents = document.createElement("li");
  mainContents.innerText = listContents[i];
  mainContents.setAttribute("class", "mainSettingOptionLi");
  container.append(mainContents);
}
