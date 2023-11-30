/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// // Set the target date
// const targetDate = new Date('2023-03-03T08:00:00');

// // Get the timer elements from the HTML
// const daysEl = document.getElementById('days');
// const hoursEl = document.getElementById('hours');
// const minutesEl = document.getElementById('minutes');
// const secondsEl = document.getElementById('seconds');

// // Update the countdown every second
// setInterval(() => {
//   // Calculate the remaining time in seconds
//   const remainingTime = Math.floor((targetDate - new Date()) / 1000);

//   // Calculate the number of days, hours, minutes, and seconds
//   const days = Math.floor(remainingTime / 86400).toString().padStart(2, '0');
//   const hours = Math.floor((remainingTime % 86400) / 3600).toString().padStart(2, '0');
//   const minutes = Math.floor((remainingTime % 3600) / 60).toString().padStart(2, '0');
//   const seconds = Math.floor(remainingTime % 60).toString().padStart(2, '0');

//   // Update the timer display
//   daysEl.textContent = days;
//   hoursEl.textContent = hours;
//   minutesEl.textContent = minutes;
//   secondsEl.textContent = seconds;
// }, 1000);