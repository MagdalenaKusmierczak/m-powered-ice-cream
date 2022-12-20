(() => {
  const refs = {
    openModalBtn: document.querySelector('[location-modal-open]'),
    closeModalBtn: document.querySelector('[location-modal-close]'),
    modalOverlay: document.querySelector('[location-modal-overlay]'),
    modal: document.querySelector('[location-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalOverlay.classList.toggle('none');
    refs.modal.classList.toggle('is-hidden');
  }
})();
