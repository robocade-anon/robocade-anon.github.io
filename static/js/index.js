window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

    var carousels = bulmaCarousel.attach('.carousel', options);

    for(var i = 0; i < carousels.length; i++) {
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }


    bulmaSlider.attach();

})

let currentTask = null;

function changeTask(taskName, videoSrc1, videoSrc2, videoSrc3) {

  const videoPlayer1 = document.getElementById('task-video-player-1');
  const videoPlayer2 = document.getElementById('task-video-player-2');
  const videoPlayer3 = document.getElementById('task-video-player-3');
  
  if (videoPlayer1) {
    videoPlayer1.src = videoSrc1;
    
    document.querySelectorAll('.task-selector .button').forEach(button => {
      button.classList.remove('is-active');
    });
    
    const clickedButton = document.querySelector(`.task-selector .button[onclick*="${taskName}"]`);
    if (clickedButton) {
      clickedButton.classList.add('is-active');
    }
  }
  if (videoPlayer2) {
    if (videoSrc2 === null) {
      document.getElementById('task-video-item-2').style.display = 'none';
    }
    else {
      document.getElementById('task-video-item-2').style.display = 'block';
    }
    videoPlayer2.src = videoSrc2;
  }
  if (videoPlayer3) {
    videoPlayer3.src = videoSrc3;
  }
  // Iterate through the video labels and mark them as 1x
  const videoLabels = document.querySelectorAll('.video-label');
  videoLabels.forEach(label => {
    label.innerHTML = label.innerHTML.replace(/(\d+)x/, '1x');
  });
}



// document.addEventListener('DOMContentLoaded', (event) => {
//   changeTask('task_1', 'static/videos/task_1_start.mp4', 'static/videos/task_1_mid.mp4', 'static/videos/task_1_last.mp4');
// });