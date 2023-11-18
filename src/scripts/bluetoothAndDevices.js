function bluetoothAndDevices() {
  let listContents = [
    "Devices",
    "Printers & scanners",
    "Phone Link",
    "Cameras",
    "Mouse",
    "Touchpad",
    "Pen & Windows lnk",
    "AutoPlay",
    "USB",
  ];
  let listIcons = [
    "devices",
    "print",
    "smartphone",
    "photo_camera",
    "mouse",
    "touch_app",
    "draw",
    "autoplay",
    "usb",
  ];
  let listDescriptions = [
    "Mouse, keyboard, pen, audio, displays and docks, other devices",
    "Preferences, troubleshoot",
    "Instantly access your mobile device from your PC",
    "Connected cameras, default image settings",
    "Buttons, mouse pointer speed, scrolling",
    "Taps,gestures, scrolling, zooming",
    "Right-handed or left-handed, pen button shortcuts, handwriting",
    "Defaults for removable drives and memory cards",
    "Notification, USB battery saver",
  ];
  let settingsMainContent = document.querySelectorAll(".settingsMainContent");
  let container = document.createElement("ul");
  title.innerText = "Bluetooth & devices";
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
}
