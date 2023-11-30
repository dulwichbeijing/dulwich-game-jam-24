// Function to calculate the time remaining until the target date
function calculateTimeRemaining() {
    const targetDate = new Date("2024-02-01T00:00:00Z"); // Target date and time in UTC
    const currentDate = new Date(); // Current date and time
    const timeRemaining = targetDate - currentDate; // Calculate the time difference
  
    if (timeRemaining <= 0) {
      // If the target date has passed, display a message
      return "Countdown expired!";
    }
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    return {
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  // Function to update the countdown timer display
  function updateCountdown() {
    const countdown = calculateTimeRemaining();
  
    // Display the countdown in your desired format (e.g., "2 days, 4 hours, 30 minutes, 15 seconds")
    const countdownDisplay1 = `${countdown.days} days, ${countdown.hours} hours,`;
    const countdownDisplay2 = `${countdown.minutes} minutes, ${countdown.seconds} seconds`;
  

    // Update an HTML element with the countdown
    document.getElementById("js-countdown-days-hours").textContent = countdownDisplay1;
    document.getElementById("js-countdown-mins-secs").textContent = countdownDisplay2;
  }
  
  // Call the updateCountdown function initially to set up the timer
  updateCountdown();
  
  // Update the countdown display every second
  const countdownInterval = setInterval(updateCountdown, 1000);