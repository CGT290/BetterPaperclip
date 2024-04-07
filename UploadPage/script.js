function customTextBar(selectElement) {
  var customInput = selectElement.closest('.mb-3').querySelector('.custom-text-bar');
    if (selectElement.value === 'Custom') {
        customInput.classList.add("cust-display");
    } else {
        customInput.classList.remove("cust-display");
    }
}

document.querySelectorAll(".drop-area_input").forEach(inputElement => {
  const dropArea = inputElement.closest(".drop-area");

  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    
    dropArea.classList.add('active');
  });

  dropArea.addEventListener("dragleave", (e) => {
    
    dropArea.classList.remove('active');
  });

  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    
    dropArea.classList.remove('active');

    const files = e.dataTransfer.files;
    if (files.length) {
      updateDropArea(files[0], dropArea); 
    }
  });
  dropArea.addEventListener("click", (e) => {

    inputElement.click();
});
inputElement.addEventListener("change", (e) => {
    const files = e.target.files;
    if (files.length) {
        updateDropArea(files[0], dropArea);
    }
});

});

function updateDropArea(file, dropArea) {
  if (file.type.startsWith('image/')) {
   
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.style.width = '100%';
      img.style.height = 'auto'; 
      img.style.objectFit = 'contain';
      dropArea.innerHTML = ''; 
      dropArea.appendChild(img); 
    };
    reader.readAsDataURL(file);
  } else {
   
    dropArea.innerHTML = `<p>File name: ${file.name}</p>`;
  }
}
function Upload(element) {
  var image = element.closest(".side-containder").querySelector("img");
  var previewContainer = document.querySelector("#queue-preview .preview-container");
  previewContainer.appendChild(image.cloneNode(true));
}


