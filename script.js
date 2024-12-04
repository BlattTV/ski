function updateWebcam(id, url) {
    const webcam = document.getElementById(id);
    const timestamp = new Date().getTime();
    webcam.src = `${url}?timestamp=${timestamp}`;
}

function toggleFullscreen(event) {
    const elem = event.target;
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
}

function refreshAllWebcams() {
    updateWebcam('webcam1', 'https://www.julianpopp.de/wfc/wfc.jpg');
    updateWebcam('webcam2', 'https://example.com/path/to/webcam2.jpg');
    updateWebcam('webcam3', 'https://example.com/path/to/webcam3.jpg');
    updateWebcam('webcam4', 'https://example.com/path/to/webcam4.jpg');
}

document.getElementById('refresh-btn').addEventListener('click', refreshAllWebcams);

const webcamImages = document.querySelectorAll('.webcam-item img');
webcamImages.forEach(img => {
    img.addEventListener('click', toggleFullscreen);
});
