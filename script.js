    var valentinesCard = document.getElementById('valentinesCard');
    var audio = new Audio();
    var isPlaying = false;
    var musicSources = ['PALAGI.mp3', 'Perfect.mp3', 'Heart.mp3', 'MarryMe.mp3']; // Add more songs here
    var currentMusicIndex = 0;
    $(document).ready(function () {
        $('.container').hover(
            function () {
                $('.card').stop().animate({
                    top: '-90px'
                }, 'slow');
            },
            function () {
                $('.card').stop().animate({
                    top: 0
                }, 'slow');
            }
        );
        $(document).scroll(function() {
            let scrollPosition = window.scrollY;
            $("#section1, #section3").css('background-position-y', -scrollPosition * 0.5 + "px");
        });
        initializeAudio();
        playPauseFunction();
    });
    $('#valentinesCard').click(function () {
        // Redirect to another HTML page
        window.location.href = 'letter.html'; // Replace 'next_page.html' with the URL of the next HTML page
    });
    $(document).click(function() {
        $('#startButton').click(function() {
            window.location.href = 'video.html'; // Replace 'other_page.html' with the URL of the page you want to navigate to
        });
    });
    
    
// Music
function initializeAudio() {
    audio.src = musicSources[currentMusicIndex];
    // Preload the audio
    audio.load();
    // Event listener for when the metadata is loaded (including duration information)
    audio.addEventListener('ended', function () {
        nextFunction(); // Move to the next song
        initializeAudio(); // Initialize the next song
        playPauseFunction(); // Autoplay the next song
    });
    playPauseFunction();
}
function prevFunction() {
    // Move to the previous song
    currentMusicIndex = (currentMusicIndex - 1 + musicSources.length) % musicSources.length;
    initializeAudio();
    playPauseFunction();
}
function playPauseFunction(fromNextFunction) {
    // Toggle play/pause and update the icon
    if (isPlaying && !fromNextFunction) {
        audio.pause();
        $('#playPauseIcon').removeClass('fa-pause').addClass('fa-play');
    } else {
        audio.play();
        $('#playPauseIcon').removeClass('fa-play').addClass('fa-pause');
    }
    isPlaying = !isPlaying;
}
function nextFunction() {
    // Move to the next song
    currentMusicIndex = (currentMusicIndex + 1) % musicSources.length;
    initializeAudio();
    
    // Autoplay the next song only if it was playing
    setTimeout(function() {
        playPauseFunction(true);
    }, 10); // You can adjust the delay (in milliseconds) as needed
}