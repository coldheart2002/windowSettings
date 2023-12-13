const settingsObject = [
  { title: "Home" },
  {
    //System
    title: "System",
    subSetting: [
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
    ],
    subSettingIcon: [
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
    ],
    subSettingDescription: [
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
    ],
  },
  {
    //Bluetooth
    title: "Bluetooth",
    subSetting: [
      "Devices",
      "Printers & scanners",
      "Phone Link",
      "Cameras",
      "Mouse",
      "Touchpad",
      "Pen & Windows lnk",
      "AutoPlay",
      "USB",
    ],
    subSettingIcon: [
      "devices",
      "print",
      "smartphone",
      "photo_camera",
      "mouse",
      "touch_app",
      "draw",
      "autoplay",
      "usb",
    ],
    subSettingDescription: [
      "Mouse, keyboard, pen, audio, displays and docks, other devices",
      "Preferences, troubleshoot",
      "Instantly access your mobile device from your PC",
      "Connected cameras, default image settings",
      "Buttons, mouse pointer speed, scrolling",
      "Taps,gestures, scrolling, zooming",
      "Right-handed or left-handed, pen button shortcuts, handwriting",
      "Defaults for removable drives and memory cards",
      "Notification, USB battery saver",
    ],
  },
  {
    //Network
    title: "Network",
    subSetting: [
      "Wi-Fi",
      "Ethernet",
      "VPN",
      "Mobile hotspot",
      "Airplane mode",
      "Proxy",
      "Dial-up",
      "Advance network settings",
    ],
    subSettingIcon: [
      "wifi",
      "cancel",
      "vpn_key",
      "cancel",
      "flight",
      "cancel",
      "cancel",
      "cancel",
    ],
    subSettingDescription: [
      "Connect, manage known networks, metered network",
      "Authentication, IP and DNS settings, metered network",
      "Add, connect, manage",
      "Share your internet connection",
      "Stop wireless communication",
      "Proxy server for Wi-Fi and Ethernet connections",
      "Set up a dial-up internet connection",
      "View all network adapters, network reset",
    ],
  },
  {
    //Personalization
    title: "Personalization",
    subSetting: [
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
    ],
    subSettingIcon: [
      "cancel",
      "cancel",
      "cancel",
      "cancel",
      "cancel",
      "cancel",
      "cancel",
      "cancel",
      "cancel",
      "cancel",
    ],
    subSettingDescription: [
      "Background image, color, slideshow",
      "Accent color, transparency effects, color theme",
      "Install, create, manage",
      "Connect devices, effects, add settings",
      "Lock screen images, apps, annimations",
      "Touch keyboard, voice typing, emoji and more, input methon editor",
      "Recent apps and items, folders",
      "Taskbar behaviors, system pins",
      "Install, manage",
      "Select all the ways you plan to use your device to get personalized tips, ads, and recommendations within Microsoft experiences.",
    ],
  },
  {
    //Apps
    title: "Apps",
    subSetting: [
      "Installed apps",
      "Advanced app settings",
      "Default apps",
      "Offline maps",
      "Optional features",
      "Apps for websites",
      "Video playback",
      "Startup",
    ],
    subSettingIcon: [
      "cancel",
      "cancel",
      "cancel",
      "cancel",
      "cancel",
      "cancel",
      "cancel",
      "cancel",
    ],
    subSettingDescription: [
      "Installed apps",
      "Advanced app settings",
      "Default apps",
      "Offline maps",
      "Optional features",
      "Apps for websites",
      "Video playback",
      "Startup",
    ],
  },
  {
    //Accounts
    title: "Accounts",
    subSetting: [
      [
        "Your info",
        "Sign-in options",
        "Email & accounts",
        "Family",
        "Windows backup",
        "Access work or school",
        "Passkey settings",
      ],
      [
        "Account privacy",
        "Subscriptions",
        "Rewards",
        "Payment options",
        "Order history",
        "Account & billing help",
      ],
    ],
    subSettingIcon: [
      ["cancel", "cancel", "cancel", "cancel", "cancel", "cancel", "cancel"],
      ["cancel", "cancel", "cancel", "cancel", "cancel", "cancel"],
    ],
    subSettingDescription: [
      [
        "Your info",
        "Sign-in options",
        "Email & accounts",
        "Family",
        "Windows backup",
        "Access work or school",
        "Passkey settings",
      ],
      [
        "Account privacy",
        "Subscriptions",
        "Rewards",
        "Payment options",
        "Order history",
        "Account & billing help",
      ],
    ],
  },
  {
    //Time
    title: "Time",
    subSetting: ["Date & time", "Language & region", "Typing", "Speech"],
    subSettingIcon: ["cancel", "cancel", "cancel", "cancel"],
    subSettingDescription: [
      "Date & time",
      "Language & region",
      "Typing",
      "Speech",
    ],
  },
  {
    //Gaming
    title: "Gaming",
    subSetting: ["Game Bar", "Captures", "Game Mode"],
    subSettingIcon: ["cancel", "cancel", "cancel"],
    subSettingDescription: ["Game Bar", "Captures", "Game Mode"],
  },
  {
    //Acceessibility
    title: "Acceessibility",
    subSetting: [
      [
        "Text size",
        "Visual effects",
        "Mouse pointer and touch",
        "Text cursor",
        "Magnifier",
        "Color filters",
        "Contrast themes",
        "Narrator",
        "For developers",
        "Activation",
      ],
      ["Audio", "Captions"],
      ["Speech", "Keyboard", "Mouse", "Eye control"],
    ],
    subSettingIcon: [
      [
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
      ],
      ["cancel", "cancel"],
      ["cancel", "cancel", "cancel", "cancel"],
    ],
    subSettingDescription: [
      [
        "Text size",
        "Visual effects",
        "Mouse pointer and touch",
        "Text cursor",
        "Magnifier",
        "Color filters",
        "Contrast themes",
        "Narrator",
        "For developers",
        "Activation",
      ],
      ["Audio", "Captions"],
      ["Speech", "Keyboard", "Mouse", "Eye control"],
    ],
  },
  {
    //Privacy
    title: "Privacy",
    subSetting: [
      ["Windows Security", "Find my device"],
      [
        "General",
        "Speech",
        "Inking & typing personalization",
        "Diagnostics & feedback",
        "Activity history",
        "Seacrh permissions",
        "Searching Windows",
      ],
      [
        "Location",
        "Camera",
        "Microphone",
        "Voice activation",
        "Notifications",
        "Account info",
        "Contacts",
        "Calendar",
        "Phone calls",
        "Call history",
        "Email",
        "Tasks",
        "Messaging",
        "Radios",
        "Other devices",
        "App diagnostics",
        "Automatic file downloads",
        "Documents",
        "Downloads folder",
        "Music library",
        "Pictures",
        "Videos",
        "File system",
        "Screenshot borders",
        "Screenshots and apps",
      ],
    ],
    subSettingIcon: [
      ["cancel", "cancel"],
      ["cancel", "cancel", "cancel", "cancel", "cancel", "cancel", "cancel"],
      [
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
        "cancel",
      ],
    ],
    subSettingDescription: [
      ["Windows Security", "Find my device"],
      [
        "General",
        "Speech",
        "Inking & typing personalization",
        "Diagnostics & feedback",
        "Activity history",
        "Seacrh permissions",
        "Searching Windows",
      ],
      [
        "Location",
        "Camera",
        "Microphone",
        "Voice activation",
        "Notifications",
        "Account info",
        "Contacts",
        "Calendar",
        "Phone calls",
        "Call history",
        "Email",
        "Tasks",
        "Messaging",
        "Radios",
        "Other devices",
        "App diagnostics",
        "Automatic file downloads",
        "Documents",
        "Downloads folder",
        "Music library",
        "Pictures",
        "Videos",
        "File system",
        "Screenshot borders",
        "Screenshots and apps",
      ],
    ],
  },
  {
    //Update
    title: "Update",
    subSetting: [
      "Get the latest update as soon as possible",
      "Pause updates",
      "Update history",
      "Advance options",
    ],
    subSettingIcon: ["cancel", "cancel", "cancel", "cancel"],
    subSettingDescription: [
      "Get the latest update as soon as possible",
      "Pause updates",
      "Update history",
      "Advance options",
    ],
  },
];

let subSetting = document.querySelector(".subSetting");
let mainSetting = document.querySelector(".mainSetting");
// // tester for validity
// console.log("settingsObject: " + settingsObject.length);
// console.log("");
// for (let i = 1; i < settingsObject.length; i++) {
//   let isValid =
//     settingsObject[i].subSetting.length ===
//       settingsObject[i].subSettingDescription.length &&
//     settingsObject[i].subSetting.length ===
//       settingsObject[i].subSettingIcon.length
//       ? "valid"
//       : "invalid";
//   console.log(settingsObject[i].title + "." + isValid);
// }

//--CONTENT TOGGLE
//initialize
for (let i = 0; i < settingsChoices.length; i++) {
  settingsChoices[i].addEventListener("click", () => {
    //toggle
    mainSetting.innerText = settingsObject[i].title;
    // Remove 'liActive' class from all elements
    for (let j = 0; j < settingsChoices.length; j++) {
      settingsChoices[j].classList.remove("liActive");
      contents[j].classList.remove("activeContents");
      contents[j].style.zIndex = 100;
      indicator[j].style.display = "none";

      //remove subSetting
      subSetting.style.display = "none";
    }
    // Add 'liActive' class to the clicked element
    settingsChoices[i].classList.add("liActive");
    contents[i].style.zIndex = 0;
    contents[i].classList.add("activeContents");
    indicator[i].style.display = "flex";
  });
}

//MAIN LOOP----------------------------------------------------------
for (let i = 1; i < settingsObject.length; i++) {
  let container = document.createElement("ul");
  settingsMainContent[i].append(container);
  container.setAttribute("class", "mainSettingOptionUl");

  // console.log(i + ": " + settingsObject[i].title);
  // console.log("");

  for (let j = 0; j < settingsObject[i].subSetting.length; j++) {
    if (Array.isArray(settingsObject[i].subSetting[j])) {
      // If settingsObject[i] is an array, skip this iteration and move to the next one
      for (let k = 0; k < settingsObject[i].subSetting[j].length; k++) {
        innerCreateHtmlElements(container, i, j, k);
      }
      continue;
    }

    // console.log(i + "-" + j + ": " + settingsObject[i].subSetting[j]);
    // console.log("");

    createHtmlElements(container, i, j);
  }
}

function createHtmlElements(container, i, j) {
  let mainContents = document.createElement("li");
  let span = document.createElement("span");
  let detailContainer = document.createElement("div");
  let name = document.createElement("div");
  let description = document.createElement("div");
  let navNext = document.createElement("span");

  mainContents.setAttribute("class", "mainSettingOptionLi");
  span.innerText = settingsObject[i].subSettingIcon[j];
  span.setAttribute("class", "material-symbols-outlined mainSettingIcon");
  name.innerText = settingsObject[i].subSetting[j];
  name.setAttribute("class", "subSettingsName");
  detailContainer.setAttribute("class", "detailContainer");
  description.innerText = settingsObject[i].subSettingDescription[j];
  description.setAttribute("class", "mainSettingDescription");
  navNext.innerText = "navigate_next";
  navNext.setAttribute("class", "material-symbols-outlined navNext");

  container.append(mainContents);
  mainContents.append(span, detailContainer, navNext);
  detailContainer.append(name, description);
}

function innerCreateHtmlElements(container, i, j, k) {
  let mainContents = document.createElement("li");
  let span = document.createElement("span");
  let detailContainer = document.createElement("div");
  let name = document.createElement("div");
  let description = document.createElement("div");
  let navNext = document.createElement("span");

  mainContents.setAttribute("class", "mainSettingOptionLi");
  span.innerText = settingsObject[i].subSettingIcon[j][k];
  span.setAttribute("class", "material-symbols-outlined mainSettingIcon");
  name.innerText = settingsObject[i].subSetting[j][k];
  name.setAttribute("class", "subSettingsName");
  detailContainer.setAttribute("class", "detailContainer");
  description.innerText = settingsObject[i].subSettingDescription[j][k];
  description.setAttribute("class", "mainSettingDescription");
  navNext.innerText = "navigate_next";
  navNext.setAttribute("class", "material-symbols-outlined navNext");

  container.append(mainContents);
  mainContents.append(span, detailContainer, navNext);
  detailContainer.append(name, description);
}

// let settingsChoices = document.querySelectorAll(".settingsChoices");
// for (let i = 0; i < settingsChoices.length; i++) {
//   settingsChoices[i].addEventListener("click", () => {
//     mainSettings = settingsChoices[i].querySelector("p");
//     title =
//       mainSettingOptionLi[
//         i
//       ].parentElement.parentElement.parentElement.parentElement.querySelector(
//         "#title"
//       );
//     title.innerText = mainSettings.innerText;

//     console.log(settingsChoices[1]);
//   });
// }

let subSettingsName = document.querySelectorAll(".subSettingsName");
let mainSettingOptionLi = document.querySelectorAll(".mainSettingOptionLi");
for (let i = 0; i < subSettingsName.length; i++) {
  mainSettingOptionLi[i].addEventListener("click", () => {
    // title.innerText = subSettingsName[i].innerText;
    // subSetting[i].innerText = title.innerText;
    subSetting.innerText = subSettingsName[i].innerText;
    subSetting.style.display = "block";
  });
}
