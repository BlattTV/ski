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
    updateWebcam('webcam2', 'https://www.skiarea-heubach.com/wp-content/uploads/2023/12/skiarea-cam.jpg');
    updateWebcam('webcam3', 'https://vcdn.bergfex.at/webcams/archive.new/downsized/2/13082/2024/12/04/13082_2024-12-04_0930_688d47e0ed941b8b.jpg');
    updateWebcam('webcam4', 'https://vcdn.bergfex.at/webcams/archive.new/downsized/5/3045/2024/12/04/3045_2024-12-04_0930_688d47e0ed941b8b.jpg');
}

document.getElementById('refresh-btn').addEventListener('click', refreshAllWebcams);

const webcamImages = document.querySelectorAll('.webcam-item img');
webcamImages.forEach(img => {
    img.addEventListener('click', toggleFullscreen);
});

// Automatische Aktualisierung alle 5 Minuten
setInterval(refreshAllWebcams, 300000); // 300000 Millisekunden = 5 Minuten
