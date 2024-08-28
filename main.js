const dropArea = document.getElementById("drop-box");
const inputArea = document.getElementById("input-file");
const imgView = document.getElementById("img-view");

inputArea.addEventListener("change", uploadImage);

function uploadImage() {
  let imgLink = URL.createObjectURL(inputArea.files[0]);
  imgView.style.backgroundImage = `url(${imgLink})`;

  imgView.textContent = "";
  imgView.style.border = 0;
}

dropArea.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropArea.addEventListener("drop", function (e) {
  e.preventDefault();
  inputArea.files = e.dataTransfer.files;
  uploadImage();
});
