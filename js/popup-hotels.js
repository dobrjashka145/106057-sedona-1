  var headerForm = document.querySelector(".header-hotels-form")
  var popup = document.querySelector(".modal-hotels-form")
  var dateEntry = popup.querySelector("[name=entry-date]")
  var dateExit = popup.querySelector("[name=exit-date]")
  var form = popup.querySelector("form")
  
  headerForm.addEventListener("click", function(event) {
    event.preventDefault();
	if (popup.classList.contains("modal-show")) {
	  popup.classList.remove("modal-show");
	} else {
		popup.classList.add("modal-show");
		EntryDate.focus();
	}
	});
    
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
     if (popup.classList.contains("modal-show")) {
       popup.classList.remove("modal-show");
     }
    }
  });
  
  form.addEventListener("submit", function(event) {
    if (!dateEntry.value) {
      event.preventDefault();
      dateEntry.classList.add("modal-error");
    } 
  });