
const backgroundImages = [
  "url('image1.jpg')",
  // "url('image.jpg')",
  // "url('image3.jpg')",
  "url('image3.jpg')"
  
];
//Image changing js
let currentImageIndex = 0;

function changeBackground() {
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length; // Loop through array

  document.getElementById('main').style.backgroundImage = backgroundImages[currentImageIndex];

}

function getBackgroundColorFromImage(imageUrl) {
 
  const colorThief = new ColorThief();
  const image = new Image();
  image.src = imageUrl;
  image.onload = () => {
      const palette = colorThief.getPalette(image);
      return `rgb(${palette[0]}, ${palette[1]}, ${palette[2]})`;
  };
}

setInterval(changeBackground, 5000); // Change background every 5 seconds (adjust as needed)

var hours;

document.getElementById("timeForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get start and end time values
  var startTime = new Date(document.getElementById("startTime").value);
  var endTime = new Date(document.getElementById("endTime").value);

  // Calculate the time difference in milliseconds
  var timeDifference = endTime - startTime;

  // Convert milliseconds to hours, minutes, and seconds
  hours = Math.floor(timeDifference / 3600000);
  var minutes = Math.floor((timeDifference % 3600000) / 60000);
  var seconds = Math.floor((timeDifference % 60000) / 1000);

  // Display the time difference
  alert("Time Difference: " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.");
});

// For the login popup
function openPopup() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}


// Login-sign up content
function toggleForm(formType) {
  if (formType === 'signup') {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('signupForm').style.display = 'block';
      document.querySelector('.tab.active').classList.remove('active');
      document.querySelectorAll('.tab')[1].classList.add('active');
  } else if (formType === 'login') {
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('signupForm').style.display = 'none';
      document.querySelector('.tab.active').classList.remove('active');
      document.querySelectorAll('.tab')[0].classList.add('active');
  }
}






var carPrice;
function showCarDetails(event,carId) {
  
    event.preventDefault();


    // Get the selected car details
    var carModel = document.querySelector(`#${carId} h3`).textContent;
    var carRating = document.querySelector(`#${carId} p`).textContent;
    carPrice = document.querySelector(`#${carId} h2`).textContent;
    var carImageSrc = document.querySelector(`#${carId} img`).src;

  // Display the selected car details
    console.log("Car Image Source:", carImageSrc);
    document.getElementById('carModel').textContent = carModel;
    document.getElementById('carRating').textContent = carRating;
    document.getElementById('carPrice').textContent = carPrice;
    document.getElementById('carImage').innerHTML = `<img src="${carImageSrc}" alt="${carModel}">`;


//Calculation part of checkout;

  document.getElementById('total-time').textContent=hours;
  var totalPrice = parseInt(carPrice.match(/\d+/)[0]);
  console.log(totalPrice);
  
  document.getElementById('trip-amount').textContent=totalPrice+ "×"+ hours;
  var totalAmount=totalPrice*hours;
  document.getElementById('total-amount').textContent=totalAmount;
//protection fee(7%)
  var prot_amount=(totalAmount*7)/100
document.getElementById('protection-amount').textContent=prot_amount;
//summ-total
  var sum_total=totalAmount+prot_amount+99;
document.getElementById('final-total').textContent=sum_total;

    // Show the checkout page when the button is clicked
    document.getElementById('checkoutPage').style.display = 'block';
    document.getElementById('cars_page').style.display='none';
    document.getElementById('front').style.display='none';
    document.getElementById('foote').style.display='none';
}



function hide_checkout(){
  document.getElementById('checkoutPage').style.display = 'none';
  document.getElementById('front').style.display = 'block';
  document.getElementById('cars_page').style.display = 'block';
  document.getElementById('foote').style.display = 'block';
}