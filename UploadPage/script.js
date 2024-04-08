function customTextBar(selectElement) {
  if (selectElement.value === 'Custom') {
      selectElement.closest('.mb-3').querySelector('.custom-text-bar').classList.add("cust-display");
  }
  if(selectElement.value === 'All'){
      selectElement.closest('.mb-3').querySelector('.custom-text-bar').classList.remove("cust-display");
  }
  if(selectElement.value === 'Landscape'){
  document.querySelector(".drop-area").setAttribute("style", "height: 200px; top:150px;");
  }
  if(selectElement.value === 'Portrait'){
  document.querySelector(".drop-area").setAttribute("style", "height: 600px;");
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

function undo(dropArea, inputElement) {
 
  dropArea.innerHTML = `<div><p>Tap or drag and drop files here to upload</p></div>`;
  

  inputElement.value = '';
}

function updateDropArea(file, dropArea, inputElement) {
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

      
      img.addEventListener('click', () => {
        undo(dropArea, inputElement);
      });
    };
    reader.readAsDataURL(file);
  } else {
    
    dropArea.innerHTML = `<p>File name: ${file.name}</p>`;
    dropArea.querySelector('p').style.cursor = 'pointer'; 
    dropArea.querySelector('p').addEventListener('click', () => {
      undo(dropArea, inputElement);
    });
  }
}


