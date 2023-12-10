system();

function system() {
  for (let g = 0; g < listContents.length; g++) {
    let container = document.createElement("ul");
    settingsMainContent[g].append(container);

    container.setAttribute("class", "mainSettingOptionUl");

    for (let h = 0; h < listContents[g].length; h++) {
      if (Array.isArray(listContents[g][h])) {
        for (let i = 0; i < listContents[g][h].length; i++) {
          let mainContents = document.createElement("li");
          let span = document.createElement("span");
          let detailContainer = document.createElement("div");
          let name = document.createElement("div");
          let description = document.createElement("div");
          let navNext = document.createElement("span");

          mainContents.setAttribute("class", "mainSettingOptionLi");
          span.innerText = listIcons[g][h];
          span.setAttribute(
            "class",
            "material-symbols-outlined mainSettingIcon"
          );
          name.innerText = listContents[g][h][i];
          detailContainer.setAttribute("class", "detailContainer");
          description.innerText = listDescriptions[g][h];
          description.setAttribute("class", "mainSettingDescription");
          navNext.innerText = "navigate_next";
          navNext.setAttribute("class", "material-symbols-outlined navNext");

          container.append(mainContents);
          mainContents.append(span, detailContainer, navNext);
          detailContainer.append(name, description);

          // console.log(listContents[g][h][i]);
        }
      }

      let mainContents = document.createElement("li");
      let span = document.createElement("span");
      let detailContainer = document.createElement("div");
      let name = document.createElement("div");
      let description = document.createElement("div");
      let navNext = document.createElement("span");

      mainContents.setAttribute("class", "mainSettingOptionLi");
      span.innerText = listIcons[g][h];
      span.setAttribute("class", "material-symbols-outlined mainSettingIcon");
      name.innerText = listContents[g][h];
      detailContainer.setAttribute("class", "detailContainer");
      description.innerText = listDescriptions[g][h];
      description.setAttribute("class", "mainSettingDescription");
      navNext.innerText = "navigate_next";
      navNext.setAttribute("class", "material-symbols-outlined navNext");

      container.append(mainContents);
      mainContents.append(span, detailContainer, navNext);
      detailContainer.append(name, description);
    }
  }
}
