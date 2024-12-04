function updateWebcam() {
    const webcam = document.getElementById('webcam');
    const timestamp = new Date().getTime();
    webcam.src = `https://www.julianpopp.de/wfc/wfc.jpg?timestamp=${timestamp}`;
}

function toggleFullscreen() {
    const elem = document.getElementById('webcam');
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

document.getElementById('webcam').addEventListener('click', toggleFullscreen);

setInterval(updateWebcam, 600000); // Aktualisiert das Bild alle 10 Minuten

// Initiale Aktualisierung
updateWebcam();
