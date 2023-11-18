let theme = document.getElementById("switchTheme");

theme.addEventListener("click", () => {
  if (document.body.classList.contains("darkMode")) {
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");
  } else {
    document.body.classList.remove("lightMode");
    document.body.classList.add("darkMode");
  }
});
