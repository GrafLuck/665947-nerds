var link = document.querySelector(".mail-btn");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".modal-form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
            
var isStorageSupport = true;
var storage_name = "";
var storage_email = "";
              
try {
    storage_name = localStorage.getItem("name");
    storage_email = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}  
              
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
                
    if (storage_name) {
        name.value = storage_name;
        email.focus();
    }
                
    if (storage_email) {
        email.value = storage_email;
    }
                
    name.focus();
});
            
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
              
form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
        evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", name.value);
            localStorage.setItem("email", email.value);
        }
    }
});
              
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});