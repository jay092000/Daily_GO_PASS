let currentTimeDiv = document.getElementById('current_time');
let timeSinceStartedDiv = document.getElementById('timeSinceStarted');
let timeRemainingDiv = document.getElementById('timeRemaining');
let desscritionText = document.getElementById('description_id');
const root = document.documentElement;


const todaysDay = new Date().getDay();
const timeNow = new Date(); 
console.log(todaysDay)
if(todaysDay == 4 )
{
  document.documentElement.style.setProperty('--monLight','rgb(59,102,234)');
  document.documentElement.style.setProperty('--monDark','rgb(33,69,163)');
}

if(todaysDay == 6 )
  {
    document.documentElement.style.setProperty('--monLight','rgb(72, 123, 144)');
    document.documentElement.style.setProperty('--monDark','rgb(41, 73, 88)');
  }

if(timeNow.getHours() > 12)
{
  desscritionText.innerText = "Union Station GO to Streetsville GO"
}
function calculateTime() {
  const now = new Date(); // Get the current date and time

  // Create a date object for today at 6 AM
  const startTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    timeNow.getHours() > 12 ? 17: 6,
    0,
    0
  );
  console.log(timeNow.getHours() , startTime)

  const endTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    timeNow.getHours() > 12 ? 21 : 10,
    0,
    0
  );
  const timePassed = now - startTime;

  // Calculate time remaining until the next 6 AM
  
  const timeRemaining = endTime - now;

  // Convert milliseconds to hours, minutes, seconds
  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return (
      formatWithLeadingZero(hours) +
      ':' +
      formatWithLeadingZero(minutes) +
      ':' +
      formatWithLeadingZero(seconds)
    );
  };

  const passTimeString = formatTime(timePassed);
  const remainingTimeString = formatTime(timeRemaining);

  // Display the results
  currentTimeDiv.innerText = formatCurrentDateTime();
  timeSinceStartedDiv.innerText = passTimeString;
  console.log(remainingTimeString)
  timeRemainingDiv.innerText = remainingTimeString;


  
}

// Helper function to add leading zeros
function formatWithLeadingZero(number) {
  return String(number).padStart(2, '0');
}

// Helper function to get the current date and time in a readable format
function formatCurrentDateTime() {
  const now = new Date();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const year = now.getFullYear();
  const month = months[now.getMonth()];
  const day = now.getDate();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format

  return `${month} ${day} ${year}, ${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

// Run the function every second to update the time dynamically
setInterval(calculateTime, 1000);
