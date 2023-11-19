system();

function system() {
  let settingsMainContent = document.querySelectorAll(".settingsMainContent");
  let container = document.createElement("ul");
  settingsMainContent[1].append(container);

  // console.log(settingsMainContent[1]);
  container.setAttribute("class", "mainSettingOptionUl");

  for (let h = 0; h < listContents[0].length; h++) {
    let mainContents = document.createElement("li");
    let span = document.createElement("span");
    let detailContainer = document.createElement("div");
    let name = document.createElement("div");
    let description = document.createElement("div");
    let navNext = document.createElement("span");

    mainContents.setAttribute("class", "mainSettingOptionLi");
    span.innerText = listIcons[0][h];
    span.setAttribute("class", "material-symbols-outlined mainSettingIcon");
    name.innerText = listContents[0][h];
    detailContainer.setAttribute("class", "detailContainer");
    description.innerText = listDescriptions[0][h];
    description.setAttribute("class", "mainSettingDescription");
    navNext.innerText = "navigate_next";
    navNext.setAttribute("class", "material-symbols-outlined navNext");

    container.append(mainContents);
    mainContents.append(span, detailContainer, navNext);
    detailContainer.append(name, description);
  }
}
