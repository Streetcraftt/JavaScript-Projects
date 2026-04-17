'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const showElement = function (element) {
  element.classList.remove('hidden');
};

const hideElement = function (element) {
  element.classList.add('hidden');
};

const showModal = function () {
  showElement(modal);
  showElement(overlay);
};

const hideModal = function () {
  hideElement(modal);
  hideElement(overlay);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) hideModal();
});
