// let listContents = [
//   "Wi-Fi",
//   "Ethernet",
//   "VPN",
//   "Mobile hotspot",
//   "Airplane mode",
//   "Proxy",
//   "Dial-up",
//   "Advance network settings",
// ];

settingsMainContent[3].append(container);
container.setAttribute("class", "mainSettingOptionUl");
for (let i = 0; i < listContents.length; i++) {
  let mainContents = document.createElement("li");
  mainContents.innerText = listContents[i];
  mainContents.setAttribute("class", "mainSettingOptionLi");
  container.append(mainContents);
}
