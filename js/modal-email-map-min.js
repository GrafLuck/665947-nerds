var link=document.querySelector(".mail-btn"),popup=document.querySelector(".modal"),close=popup.querySelector(".modal-close"),form=popup.querySelector(".modal-form"),name=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),isStorageSupport=!0,storage_name="",storage_email="";try{storage_name=localStorage.getItem("name"),storage_email=localStorage.getItem("email")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage_name&&(name.value=storage_name,email.focus()),storage_email&&(email.value=storage_email),name.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){name.value&&email.value?isStorageSupport&&(localStorage.setItem("name",name.value),localStorage.setItem("email",email.value)):e.preventDefault()}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&popup.classList.remove("modal-show"))});