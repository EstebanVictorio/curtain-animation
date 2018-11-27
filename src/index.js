let toggle = false;
let modal = document.querySelector("#app");
document.querySelectorAll("input")[0].addEventListener("click", function(e) {
  console.log("Toggled curtain!");
  toggle = !toggle;
  if (toggle) {
    modal.classList.add("modal-curtain");
    modal.classList.remove("modal-curtain-close");
  } else {
    modal.classList.add("modal-curtain-close");
    modal.classList.remove("modal-curtain");
  }
});
