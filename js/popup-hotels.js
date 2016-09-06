  var headerForm = document.querySelector(".header-hotels-form")
  var popup = document.querySelector(".modal-hotels-form")
  var dateEntry = popup.querySelector("[name=entry-date]")
  var dateExit = popup.querySelector("[name=exit-date]")
  var btnSubmit = popup.querySelector(".btn-submit")
  var form = popup.querySelector("form")
  
  headerForm.addEventListener("click", function(event) {
    event.preventDefault();
    if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        dateEntry.classList.remove("modal-error");
        dateExit.classList.remove("modal-error");
    } else {
    popup.classList.add("modal-show");
    dateEntry.focus();
    }
  });
    
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          dateEntry.classList.remove("modal-error");
          dateExit.classList.remove("modal-error");
      }
    }
  });
  
  btnSubmit.addEventListener("click", function(event) {
    if (dateEntry.classList.contains("modal-error")) {
        dateEntry.classList.remove("modal-error");
    }
    if (dateExit.classList.contains("modal-error")) {
        dateExit.classList.remove("modal-error");
    }
    if (!dateEntry.value) {
      event.preventDefault();
      dateEntry.classList.add("modal-error");
    }
    if (!dateExit.value) {
      event.preventDefault();
      dateExit.classList.add("modal-error");
    }   
  });