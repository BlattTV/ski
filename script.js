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

document.querySelectorAll('.webcam-container img').forEach(img => {
    img.addEventListener('click', toggleFullscreen);
});

setInterval(() => updateWebcam('webcam1', 'https://www.julianpopp.de/wfc/wfc.jpg'), 6000); // Aktualisiert Webcam 1 alle 1 Minuten
setInterval(() => updateWebcam('webcam2', 'https://www.skiarea-heubach.com/wp-content/uploads/2023/12/skiarea-cam.jpg'), 6000); // Aktualisiert Webcam 2 alle 1 Minuten
setInterval(() => updateWebcam('webcam3', 'https://skiarena3.7cam.eu/webcam.jpg'), 6000); // Aktualisiert Webcam 3 alle 1 Minuten
setInterval(() => updateWebcam('webcam4', 'https://vcdn.bergfex.at/webcams/archive.new/downsized/5/3045/2024/12/04/3045_2024-12-04_0930_688d47e0ed941b8b.jpg'), 6000); // Aktualisiert Webcam 4 alle 1 Minuten

// Initiale Aktualisierung
updateWebcam('webcam1', 'https://www.julianpopp.de/wfc/wfc.jpg');
updateWebcam('webcam2', 'https://www.skiarea-heubach.com/wp-content/uploads/2023/12/skiarea-cam.jpg');
updateWebcam('webcam3', 'https://skiarena3.7cam.eu/webcam.jpg');
updateWebcam('webcam4', 'https://vcdn.bergfex.at/webcams/archive.new/downsized/5/3045/2024/12/04/3045_2024-12-04_0930_688d47e0ed941b8b.jpg');
