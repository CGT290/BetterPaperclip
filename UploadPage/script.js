function updateButtonText(option, element) {
  element.closest('.dropdown').querySelector('.dropdown-toggle').innerText = option;
  if(option=='Custom'){
      element.closest('.dropdown').querySelector('.custom-page').classList.toggle("cust-display");
  }
  else{
      element.closest('.dropdown').querySelector('.custom-page').classList.remove("cust-display");
  }
}

document.querySelectorAll(".drop-area_input").forEach(inputElement => {
  const dropArea = inputElement.closest(".drop-area");

  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    // Add visual feedback
    dropArea.classList.add('active');
  });

  dropArea.addEventListener("dragleave", (e) => {
    // Remove visual feedback
    dropArea.classList.remove('active');
  });

  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    // Remove visual feedback
    dropArea.classList.remove('active');

    const files = e.dataTransfer.files;
    if (files.length) {
      updateDropArea(files[0], dropArea); 
    }
  });
});

function updateDropArea(file, dropArea) {
  if (file.type.startsWith('image/')) {
    // It's an image file, let's read and display it
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
    const fileInfo = document.createElement('div');
    fileInfo.innerHTML = `
      <div style="text-align: center;">
        <i class="fas fa-file" style="font-size: 48px;"></i> <!-- Font Awesome file icon -->
        <p style="word-break: break-all;">${file.name}</p> <!-- File name -->
      </div>
    `;
    fileInfo.style.display = 'flex';
    fileInfo.style.flexDirection = 'column';
    fileInfo.style.justifyContent = 'center';
    fileInfo.style.alignItems = 'center';
    fileInfo.style.height = '100%';
    dropArea.appendChild(fileInfo); // Add the file info
  }
}


