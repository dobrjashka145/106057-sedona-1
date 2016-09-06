  var mapOpen = document.querySelector(".open-map")
  var mapPopup = document.querySelector(".modal-map")
        
  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
    } else {
      mapPopup.classList.add("modal-show");
    }
  });
  
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
          mapPopup.classList.remove("modal-show");
      }
    }
  });