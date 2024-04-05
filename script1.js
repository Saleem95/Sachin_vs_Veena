function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.querySelector('.' + id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date("April 21, 2024 12:30:00");
initializeClock('clockdiv', deadline);


  // Function to slide the element
  function slideElement() {
    var element = document.querySelector('.lovebless');
    element.style.transform = 'translateX(0)';
  }

  // Call the function after the page loads
  window.onload = function() {
    slideElement();
  };


  document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video-background');
    var muteButton = document.getElementById('muteButton');

    // Function to toggle mute/unmute
    function toggleMute() {
      video.muted = !video.muted;
      // Update button text
      muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    }

    // Initially mute the video
    video.muted = true;

    // Toggle mute/unmute when video is clicked
    muteButton.addEventListener('click', toggleMute);
  });
