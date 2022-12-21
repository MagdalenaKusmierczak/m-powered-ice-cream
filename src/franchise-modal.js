(() => {
  const refs = {
    openModalBtn: document.querySelector('[franchise-modal-open]'),
    closeModalBtn: document.querySelector('[franchise-modal-close]'),
    modalOverlay: document.querySelector('[franchise-modal-overlay]'),
    modal: document.querySelector('[franchise-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalOverlay.classList.toggle('none');
    refs.modal.classList.toggle('is-hidden');
  }
})();
