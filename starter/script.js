"use strict";

//  VARIABLES
    //  QUERYSELECTOR
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
//  END VARIABLES

//  FUCTION
    //  OPEN MODAL
const openModal = function () {
  modal.style.display = "block";
  overlay.style.display = "block";
};

    //  CLOSE MODAL
const closeModal = function () {
  modal.style.display = "none";
  overlay.style.display = "none";
};

    //  CLOSE MODAL WITH KEYDOWN
const closeModalKey = function (e) {
  if (e.key === "Escape") {
    if (modal.style.display === "block") {
      closeModal();
    }
  }
};
// END FUCTION

//  ADD EVENT LISTENER
    //  OPEN MODAL
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

    //  CLOSE MODAL WITH BTN
btnCloseModal.addEventListener("click", closeModal);

    //  CLOSE MODAL WITH OVERLAY
overlay.addEventListener("click", closeModal);

    //  CLOSE MODAL WITH KEYDOW
document.addEventListener("keydown", closeModalKey);
//  END ADD EVENT LISTENER