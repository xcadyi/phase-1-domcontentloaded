// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

document.querySelector('p').innerHTML = "JavaScript is so cool. It lets me add text to my page programmatically."
