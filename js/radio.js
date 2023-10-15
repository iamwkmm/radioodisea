document.addEventListener('DOMContentLoaded', function() {
    var reproductor = document.getElementById('reproductor');
    var playButton = document.getElementById('play');
    var pauseButton = document.getElementById('pause');
    var stopButton = document.getElementById('stop');

    playButton.addEventListener('click', function() {
        reproductor.play();
    });

    pauseButton.addEventListener('click', function() {
        reproductor.pause();
    });

    stopButton.addEventListener('click', function() {
        reproductor.pause();
        reproductor.currentTime = 0;
    });
});
