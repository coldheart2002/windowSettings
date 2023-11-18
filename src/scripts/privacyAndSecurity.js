privacyAndSecurity()
function privacyAndSecurity() {
  let settingsMainContent = document.querySelectorAll(".settingsMainContent");
  let container = document.createElement("ul");
  settingsMainContent[10].append(container);
  container.setAttribute("class", "mainSettingOptionUl");
  let listContents = [
    "Display",
    "Sound",
    "Notifications",
    "Focus",
    "Power & battery",
    "Storage",
    "Nearby sharing",
    "Multitasking",
    "For developers",
    "Activation",
    "Troubleshoot",
    "Recovery",
    "Projecting to this PC",
    "Remote Desktop",
    "System Components",
    "Clipboard",
    "About",
  ];
  for (let i = 0; i < listContents.length; i++) {
    let mainContents = document.createElement("li");
    mainContents.innerText = listContents[i];
    mainContents.setAttribute("class", "mainSettingOptionLi");
    container.append(mainContents);
  }
}
