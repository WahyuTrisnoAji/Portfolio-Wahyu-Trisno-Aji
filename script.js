// humburger
const humburger = document.querySelector("#humburger");

humburger.addEventListener("click", function () {
  humburger.classList.toggle("humburger-active");
});
// contact section
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
