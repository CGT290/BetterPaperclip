function updateButtonText(option, element) {
  element.closest('.dropdown').querySelector('.dropdown-toggle').innerText = option;
  if(option=='Custom'){
      element.closest('.dropdown').querySelector('.custom-page').classList.toggle("cust-display");
  }
  else{
      element.closest('.dropdown').querySelector('.custom-page').classList.remove("cust-display");
  }
}