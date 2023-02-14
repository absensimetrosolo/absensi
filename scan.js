const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const scanOverlay = document.getElementById("scan-overlay");

const constraints = {
  video: {
    facingMode: "environment",
  },
};

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  video.srcObject = stream;
  video.setAttribute("playsinline", true);
  video.play();
});

video.addEventListener("loadedmetadata", () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
});

function captureImage() {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageData = canvas.toDataURL("image/png");
  // Use the imageData to decode the QR code and perform the necessary action
  alert("QR code scanned: " + imageData);
}

video.addEventListener("click", captureImage);
scanOverlay.addEventListener("click", captureImage);
