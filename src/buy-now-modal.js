(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-now-modal-open]'),
    openModalBtn2: document.querySelector('[buy-now-modal-open2]'),
    closeModalBtn: document.querySelector('[buy-now-modal-close]'),
    modalOverlay: document.querySelector('[buy-now-modal-overlay]'),
    modal: document.querySelector('[buy-now-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalOverlay);
  refs.openModalBtn2.addEventListener('click', toggleModalOverlay);
  refs.closeModalBtn.addEventListener('click', toggleModalOverlay);

  function toggleModalOverlay() {
    refs.modalOverlay.classList.toggle('none');
    refs.modal.classList.toggle('is-hidden');
  }
  function toggleModal() {}
})();
