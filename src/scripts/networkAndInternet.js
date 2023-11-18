function networkAndInternet() {
  let settingsMainContent = document.querySelectorAll(".settingsMainContent");
  let container = document.createElement("ul");
  title.innerText = "Network & internet";
  settingsMainContent[2].append(container);
  container.setAttribute("class", "mainSettingOptionUl");
  let listContents = [
    "Wi-Fi",
    "Ethernet",
    "VPN",
    "Mobile hotspot",
    "Airplane mode",
    "Proxy",
    "Dial-up",
    "Advance network settings",
  ];
  for (let i = 0; i < listContents.length; i++) {
    let mainContents = document.createElement("li");
    mainContents.innerText = listContents[i];
    mainContents.setAttribute("class", "mainSettingOptionLi");
    container.append(mainContents);
  }
}
