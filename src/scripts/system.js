system();
function system() {
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
  let listIcons = [
    "computer",
    "volume_up",
    "notifications",
    "adjust",
    "power_settings_new",
    "storage",
    "share",
    "splitscreen",
    "construction",
    "check_circle",
    "build",
    "device_reset",
    "devices",
    "swap_horiz",
    "bottom_sheets",
    "content_paste",
    "info",
  ];
  let listDescriptions = [
    "Monitors, brightness, nightlight, display profile",
    "Volume levels, output, input, sound devices",
    "Alert from app and system, do not disturb",
    "Reduce distractions",
    "Sleep, battery usage, battery saver",
    "Storage space, drives, configuration rules",
    "Discoverability, received files location",
    "Snap windows, desktops,task switching",
    "These settings are intended for development use only",
    "Activation state, subscriptions, product key",
    "Recommended troubleshooters, preferences, history",
    "Reset, advance startup, go back",
    "Permissions, pairing PIN, discoverability",
    "Remote Desktop users, connection permissions",
    "Remove and manage system components that are preinstalled on Windows",
    "Cut and copy history, sync, clear",
    "About specifications, rename PC, specfications",
  ];
  let settingsMainContent = document.querySelectorAll(".settingsMainContent");
  let container = document.createElement("ul");
  // title.innerText = "System";
  settingsMainContent[1].append(container);
  container.setAttribute("class", "mainSettingOptionUl");

  for (let i = 0; i < listContents.length; i++) {
    let mainContents = document.createElement("li");
    let span = document.createElement("span");
    let detailContainer = document.createElement("div");
    let name = document.createElement("div");
    let description = document.createElement("div");
    let navNext = document.createElement("span");

    mainContents.setAttribute("class", "mainSettingOptionLi");
    span.innerText = listIcons[i];
    span.setAttribute("class", "material-symbols-outlined mainSettingIcon");
    detailContainer.setAttribute("class", "detailContainer");
    name.innerText = listContents[i];
    name.setAttribute("class", "mainSettingName");
    description.innerText = listDescriptions[i];
    description.setAttribute("class", "mainSettingDescription");
    navNext.innerText = "navigate_next";
    navNext.setAttribute("class", "material-symbols-outlined navNext");

    container.append(mainContents);
    mainContents.append(span, detailContainer, navNext);
    detailContainer.append(name, description);
  }

  // <span class="material-symbols-outlined">navigate_next</span>;
}
