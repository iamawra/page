const languageToggle = document.querySelector("#languageToggle");
const menuToggle = document.querySelector("#menuToggle");
let language = "en";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "am" ? "am" : "en";
  document.querySelectorAll("[data-en][data-am]").forEach((element) => {
    element.textContent = element.dataset[language];
  });
  languageToggle.textContent = language === "en" ? "አማ" : "EN";
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Amharic" : "Switch to English");
}
languageToggle.addEventListener("click", () => setLanguage(language === "en" ? "am" : "en"));

menuToggle.addEventListener("click", () => {
  const nav = document.querySelector(".nav-links");
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.querySelector("#year").textContent = new Date().getFullYear();
