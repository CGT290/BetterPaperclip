function checkForCustomOption(selectElement) {
    const customInputDiv = document.querySelector('.custom-input');
    const customNumberInput = document.getElementById('customNumber');

    if (selectElement.value === 'Custom') {
        customInputDiv.style.display = '';
        customNumberInput.setAttribute('data-type', selectElement.id); // Use data attribute to store whether it's for pages or copies
    } else {
        customInputDiv.style.display = 'none';
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
});

function updateDropArea(file, dropArea) {
  if (file.type.startsWith('image/')) {
   
    const reader = new FileReader();
    reader.onload = (e) => {
      dropArea.innerHTML = '';
      const img = new Image();
      img.src = e.target.result;
      
       
      dropArea.appendChild(img); 
    };
    reader.readAsDataURL(file);
  } else {
   
    dropArea.innerHTML = `<p>File name: ${file.name}</p>`;
  }
}



