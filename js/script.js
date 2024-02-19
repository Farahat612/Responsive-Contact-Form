new WOW().init();


// Location Modal
function locationModal() {
  const locModal = document.querySelector('.location-modal');
  const modalBtn = document.querySelector('.open-location-modal');
  const closeBtn = document.querySelector('.close-location-modal');
  
  modalBtn.addEventListener('click', function() {
    locModal.showModal();
  });
  
  closeBtn.addEventListener('click', function() {
    locModal.close();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  locationModal();
});
