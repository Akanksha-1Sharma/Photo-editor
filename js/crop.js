const image = document.getElementById('crop');
const cropper = new Cropper(image, {
	aspectRatio:0,
	viewMode: 0,
});

document.getElementById('cropImageBtn').addEventListener('click',
function(){
var croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
// document.getElementById('output').src = croppedImage;
document.getElementById('crop').src = croppedImage;
document.querySelector(".container").classList.remove("disabled");
});
