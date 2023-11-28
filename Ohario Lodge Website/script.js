
// Replace book in page with payment page
function replace() {
  document.querySelector('.container7').style.display = 'none';
  document.querySelector('.container8').style.display = 'block';
}

// Hide payment page and show payment confirmation notice after the timer animation
function notice() {
  document.querySelector('.container8').style.display = 'none';

  document.querySelector('.progress-container').style.display = 'block';

// After 4 seconds (the duration of the animation in progress-container), show container9
setTimeout(function () {
  document.querySelector('.progress-container').style.display = 'none';

  document.querySelector('.container9').style.display = 'block';
}, 3000);
}

// When cancel is clicked for the payment details the payment details are set to empty
// The payment page is hidden and the bookings page is reloaded with its input fields set to empty 

function newform() {
  document.getElementById('email').value = '';
  document.getElementById('fullName').value = '';
  document.getElementById('visaNumber').value = '';
  document.getElementById('expiryDate').value = '';
  document.getElementById('cvv').value = '';

  document.querySelector('.container7').style.display = 'block';
  document.getElementById('date').value = '';
  document.getElementById('days').value = '';
  document.querySelector('.container8').style.display = 'none';
}



//Re-sets the original bookings page with the rooms/suites visible
function resetGrid() {
  // Show all grid items with their buttons
  document.getElementById('date').value = '';
  document.getElementById('days').value = '';

  document.querySelector('.select-button11').style.display = 'block';
  document.querySelector('.select-button12').style.display = 'block';
  document.querySelector('.select-button13').style.display = 'block';
  document.querySelector('.select-button14').style.display = 'block';

  document.querySelector('.grid-item11').style.display = 'block';
  document.querySelector('.grid-item12').style.display = 'block';
  document.querySelector('.grid-item13').style.display = 'block';
  document.querySelector('.grid-item14').style.display = 'block';
  document.querySelector('.container7').style.display = 'none';

  const selectedGridItem1 = document.querySelector('.grid-item11');
  const selectedGridItem2 = document.querySelector('.grid-item12');
  const selectedGridItem3 = document.querySelector('.grid-item13');
  const selectedGridItem4 = document.querySelector('.grid-item14');

  //Re-sets the minimum width of grid-items to auto to allow for responsiveness
  selectedGridItem1.style.minWidth = 'auto';
  selectedGridItem2.style.minWidth = 'auto';
  selectedGridItem3.style.minWidth = 'auto';
  selectedGridItem4.style.minWidth = 'auto';

  document.querySelector('.grid-container11').classList.toggle('grid-container11-alt');

  //Re-sets the buttons to center
  function centerButton(buttonSelector) {
      const buttons = document.querySelectorAll(buttonSelector);
    
      buttons.forEach(button => {
        button.style.margin = '0 auto';
    
      });
    }
    centerButton('.select-button11');
    centerButton('.select-button12');
    centerButton('.select-button13');
    centerButton('.select-button14');
    
  }


function showRoom1() {
    // Removes button from grid-item as it is not neeeded  
    document.querySelector('.select-button11').style.display = 'none';
    // Hides the grid-items that are not selected
    document.querySelector('.grid-item12').style.display = 'none';
    document.querySelector('.grid-item13').style.display = 'none';
    document.querySelector('.grid-item14').style.display = 'none';
    //Shows the book in page next to the grid-item selected.
    document.querySelector('.container7').style.display = 'block';
    const selectedGridItem = document.querySelector('.grid-item11');

    // Creates a new container for the selected grid-item and a column to the right for
    // container7, container8, progress-container and container9 
   document.querySelector('.grid-container11').classList.toggle('grid-container11-alt');

   //Sets the minimum width of the grid-item so it does not lose its shape when minimized
selectedGridItem.style.minWidth = '250px';

}

function showRoom2() {
  // Removes button from grid-item as it is not neeeded  
  document.querySelector('.select-button12').style.display = 'none';
  // Hides the grid-items that are not selected
  document.querySelector('.grid-item11').style.display = 'none';
  document.querySelector('.grid-item13').style.display = 'none';
  document.querySelector('.grid-item14').style.display = 'none';
  //Shows the book in page next to the grid-item selected.
  document.querySelector('.container7').style.display = 'block';
  const selectedGridItem = document.querySelector('.grid-item12');
  // Creates a new container for the selected grid-item and a column to the right for
  // container7, container8, progress-container and container9 
  document.querySelector('.grid-container11').classList.toggle('grid-container11-alt');

  //Sets the minimum width of the grid-item so it does not lose its shape when minimized
  selectedGridItem.style.minWidth = '250px';

}

function showRoom3() {
  // Removes button from grid-item as it is not neeeded  
  document.querySelector('.select-button13').style.display = 'none';
  // Hides the grid-items that are not selected
  document.querySelector('.grid-item11').style.display = 'none';
  document.querySelector('.grid-item12').style.display = 'none';
  document.querySelector('.grid-item14').style.display = 'none';
  //Shows the book in page next to the grid-item selected.
  document.querySelector('.container7').style.display = 'block';
  const selectedGridItem = document.querySelector('.grid-item13');
  // Creates a new container for the selected grid-item and a column to the right for
  // container7, container8, progress-container and container9 
  document.querySelector('.grid-container11').classList.toggle('grid-container11-alt');

  //Sets the minimum width of the grid-item so it does not lose its shape when minimized
  selectedGridItem.style.minWidth = '250px';

}

function showRoom4() {
  // Removes button from grid-item as it is not neeeded  
  document.querySelector('.select-button14').style.display = 'none';
  // Hides the grid-items that are not selected
  document.querySelector('.grid-item11').style.display = 'none';
  document.querySelector('.grid-item12').style.display = 'none';
  document.querySelector('.grid-item13').style.display = 'none';
  //Shows the book in page next to the grid-item selected.
  document.querySelector('.container7').style.display = 'block';
  const selectedGridItem = document.querySelector('.grid-item14');
  // Creates a new container for the selected grid-item and a column to the right for
  // container7, container8, progress-container and container9 
  document.querySelector('.grid-container11').classList.toggle('grid-container11-alt');
  //Sets the minimum width of the grid-item so it does not lose its shape when minimized
  selectedGridItem.style.minWidth = '250px';

}

//displays thank you note when the contact form is submitted
function thanksNote() {
  if (
    //Checks all fields have been enter. Otherwise no action is taken
    document.getElementById('cfname').value == '' ||
    document.getElementById('cfemail').value == '' ||
    document.getElementById('cfmessage').value == ''
  ) {
    return;
  }
   //Message box is hidden and thank you note is displayed
   //Input fields for the contact form are re-set
  document.querySelector('.box2').style.display = 'none'; 
  document.querySelector('.messageNote').style.display = 'block';
  document.getElementById('cfname').value = '';
  document.getElementById('cfemail').value ='' ;
  document.getElementById('cfmessage').value = '';

  //Timer displays the thank you note for 3 seconds then hides the note and displays the contact form
  setTimeout(function() {
    document.querySelector('.box2').style.display = 'block';
    document.querySelector('.messageNote').style.display = 'none'

  }, 3000);
}
   //Reusable code for footer
   //Contains the footer text and links to FAQ's, Terms of use, and Privacy Policy
   function generateFooterContent() {
        var content = [
          '<div class="box"><b>Follow Us</b><br><br>Facebook<br>Instagram<br>Youtube</div>',
          '<div class="box"><b>Contact details</b><br><br>Phone (03) 529 2799<br>Cell 022 505 1777<br>Email ohariolodge.co.nz</div>',
          '<div class="box"><b>Contact hours</b><br><br>Mon - Fri,  9am - 7pm<br>Sat, 10am - 4pm<br>Sun, 11am - 4pm</div>',
          '<div class="box"><b>Help Links</b><br><br><a href="#" onclick="openTextBoxOverlay()" class="help-link">FAQ\'s</a><br>' +
          '<a href="#" onclick="openTextBoxOverlay2()" class="help-link"><span style="line-height: 2;">Terms of use</span></a><br>' +
          '<a href="#" onclick="openTextBoxOverlay3()" class="help-link">Privacy policy</a><br>'

        ];
      
        // Get the element with the id "footerContent" and set its innerHTML
        var footerContentElement = document.getElementById('footerContent');
        if (footerContentElement) {
          footerContentElement.innerHTML = content.join('');
        }
      }

     
      //Creates an overlay to hide the webpage whilst the FAQ's is displayed
    function openTextBoxOverlay() {
      // Create the overlay container
      var overlay = document.createElement("div");
      overlay.className = "overlay";
  
      // Create the text box container
      var textBox = document.createElement("pre");
      textBox.className = "text-box7";
      textBox.style.height = "500px"; // Set a fixed height
      textBox.style.overflowY = "auto"; // Enable vertical scrollbar
      
      // FAQ's text content
      textBox.innerHTML = "<span style='font-weight: bold;'>FREQUENTLY ASKED QUESTIONS</span>\n\n" +
      "<span style='font-weight: bold;'>Accommodations</span>\n\n" +
      "Can I request a specific room or view?\n" +
      "-- Yes you can.\n\n" +
      "What amenities are included with my stay?\n" +
      "-- Each room has an ensuite and a balcony.\n" +
      "   You can request a room with a fire place.\n\n" +

      "<span style='font-weight: bold;'>Reservations</span>\n\n" + 
      "How can I make a reservation?\n" + 
      "-- Online through the website or by phone.\n\n" +
      "What is your cancellation policy?\n" +
      "-- A full refund will be provided if you cancel\n" +
      "   your reservation at least 14 days before you\n" +
      "   are due to arrive.\n\n" +
      "Is there a minimum stay requirement?\n" +
      "-- There is no minimum stay requirements.\n\n" +
     
      "<span style='font-weight: bold;'>Check-In and Check-Out</span>\n\n" +
      "What are the check-in and check-out times?\n" +
      "-- You can check in or check out any time that\n" +
      "   suits. Just let us know your timings and we\n" +
      "   will accommodate.\n\n" +
      
      "<span style='font-weight: bold;'>Dining</span>\n\n" +
      "What dining options are available?\n" + 
      "-- We have a diverse menu and cater for vegan.\n" +
      "   We have an excellent variety of NZ wines.\n\n" +
      "Is advance dining reservation required?\n" +
      "-- We have set times for brekfast, lunch and\n" +
      "   dinner. These timings are flexible.\n\n" +
     
      "<span style='font-weight: bold;'>Activities</span>\n\n" +
      "What activities are offered?\n" +
      "-- We have a pool, a spa, a sauna, massage,\n" +
      "   and a snooker table.\n\n"  +
      "Can I book activities in advance?\n" +
      "-- There is no need to.\n\n" + 
      "Are there additional fees for activities?\n" +
      "-- There are no additional fees.\n\n" +

      "<span style='font-weight: bold;'>Transportation</span>\n\n" +
      "How do I get to the lodge?\n" +
      "-- Please use Google maps. Our address is on.\n" +
      "   the website under contact.\n\n" +
      "Do you offer airport transfers?\n" +
      "-- You can arrange with us to pick you up\n" +
      "   from Wanaka or Christchurch airport.\n\n" +
      "Is there parking available?\n" + 
      "-- Yes we have parking available and its free.\n\n" + 
         
      "<span style='font-weight: bold;'>Payments</span>\n\n" +
      "What forms of payment do you accept?\n" +
      "-- Eftpos or bank transfer.\n\n" +
      "Is a deposit required when making a reservation?\n" +
      "-- The full amount must be paid for your booking\n" +
      "   before you arrive.\n\n" +  
      "Are there any additional fees or taxes?\n" +
      "-- No, there are no additional fees.\n" +
      "   or taxes.\n\n" +
     
      "<span style='font-weight: bold;'>Policies</span>\n\n" +
      "What is your smoking policy?\n" +
      "-- You can smoke outside in a designated area.\n\n" +
      "Do you allow pets?\n" +
      "-- This can be arranged depending on the breed.\n\n" +
      "What is your policy on children\n" +
      "-- Children are welcome.\n";
  
      // Create the close button
      var closeButton = document.createElement("button");
      closeButton.className = "close-button";
      closeButton.textContent = "Close";
      //button click removes overlay
      closeButton.onclick = function() {
          overlay.style.display = "none";
      };
  
      // creates an overlay that contains a text box and a close button 
      overlay.appendChild(textBox);
      overlay.appendChild(closeButton);
      document.body.appendChild(overlay);

      // Makes the overlay page responsive
      overlay.style.display = "flex";
  }
   //Creates an overlay to hide the webpage whilst the Terms of use is displayed
  function openTextBoxOverlay2() {
    // Create the overlay container
    var overlay = document.createElement("div");
    overlay.className = "overlay";

    // Create the text box container
    var textBox = document.createElement("pre");
    textBox.className = "text-box7";
    textBox.style.height = "500px"; //Set a fixed height
    textBox.style.overflowY = "auto"; // Enable vertical scrollbar
     
    // Terms of use text content
    textBox.innerHTML = "<span style='font-weight: bold;'>TERMS OF USE</span>\n\n" +
    "<span style='font-weight: bold;'>Reservations and Payment Terms</span>\n\n" +
    "Reservations are subject to availability and\n" +
    "are confirmed upon receipt of payment.\n\n" +
    
    "<span style='font-weight: bold;'>Cancellation and Refund Policy</span>\n\n" + 
    "Cancellations made 14 days before your booking\n" +
    "will result in a full refund.\n\n" +
    "Early departures can be arranged with management.\n" +
    "A 15% bond will be withheld in these cases.\n\n" +
     
    "<span style='font-weight: bold;'>Force Majeure</span>\n\n" +
    "In the event of unforeseeable circumstances\n" +
    "beyond our control (e.g., natural disasters), we\n" +
    "reserve the right to modify or cancel reservations.\n\n" +
    
    "<span style='font-weight: bold;'>Liability and Damages</span>\n\n" +
    "We are not responsible for the loss or damage of\n" +
    "personal belongings during your stay.\n\n" +
    "Guests will be held responsible for any damages.\n" +
    "to the property\n\n" +
   
    "<span style='font-weight: bold;'>Privacy and Data Handling</span>\n\n" +
    "Guest information is kept confidential\n" +
    "and used solely for reservation and\n" + 
    "communication purposes.\n\n" +
  
    "<span style='font-weight: bold;'>Changes to Terms and Conditions</span>\n\n" +
    "We reserve the right to update these terms,\n" + 
    "and guests will be notified of any changes.\n\n" +
      
    "<span style='font-weight: bold;'>Respect and Behaviour</span>\n\n" +
    "Guests are expected to respect the privacy\n" +
    "and tranquility of other guests.\n\n" +
    "We reserve the right to remove any guest for\n" +
    "disruptive or inappropriate behavior without.\n" +
    "a refund.\n\n" +
    
    "<span style='font-weight: bold;'>Termination of Stay</span>\n\n" +
    "We reserve the right to terminate a guest's\n" +
    "stay for non-compliance with our terms and\n" +
    "conditions.\n";

    // Create the close button
    var closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.textContent = "Close";
    //button click removes overlay
    closeButton.onclick = function() {
        overlay.style.display = "none";
    };
    // creates an overlay that contains a text box and a close button 
    overlay.appendChild(textBox);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);

    // Makes the overlay page responsive
    overlay.style.display = "flex";
}
//Creates an overlay to hide the webpage whilst the Privacy Policy is displayed
function openTextBoxOverlay3() {
  // Create the overlay container
  var overlay = document.createElement("div");
  overlay.className = "overlay";

  // Create the text box container
  var textBox = document.createElement("pre");
  textBox.className = "text-box7";
  textBox.style.height = "500px"; //Set a fixed height
  textBox.style.overflowY = "auto"; // Enable vertical scrollbar
  // Privacy policy text content
  textBox.innerHTML =  "<span style='font-weight: bold;'>PRIVACY POLICY</span>\n\n" +
  "<span style='font-weight: bold;'>Information we collect</span>\n\n" +
  "We collect personal and non-personal\n" +
  "information, including personal details,\n" +
  "reservation information, and website usage\n" +
  "information, to enhance the guest experience\n" +
  "during their stay.\n\n" +
   
  "<span style='font-weight: bold;'>How we use your information</span>\n\n" + 
  "he owner uses the collected information\n" +
  "for reservations, guest services, marketing,\n" +
  "and analytics, with the goal of providing a\n" +
  "tailored and memorable experience.\n\n" +
   
  "<span style='font-weight: bold;'>Data sharing and disclousure</span>\n\n" +
  "The owner does not sell guest information\n" + 
  "but may share it with service providers who\n" + 
  "assist in delivering services or when required\n" + 
  "by law to meet legal obligations.\n\n" +
   
  "<span style='font-weight: bold;'>Data security</span>\n\n" +
  "The owner takes measures to safeguard guest\n" + 
  "information, such as encryption, access controls,\n" + 
  "and regular security audits, to protect the\n" + 
  "data's integrity and confidentiality.\n\n" +
  
  "<span style='font-weight: bold;'>Your Privacy Choices</span>\n\n" +
  "Guests have the right to access, update,\n" + 
  "or correct their personal information and\n" + 
  "can opt out of marketing communications.\n\n" +

  "<span style='font-weight: bold;'>Contact us</span>\n\n" +
  "Guests are encouraged to reach out to the\n" +
  "owner with any questions or concerns about\n" + 
  "their privacy and personal information.\n"; 
  
   // Create the close button
  var closeButton = document.createElement("button");
  closeButton.className = "close-button";
  closeButton.textContent = "Close";
   //button click removes overlay
  closeButton.onclick = function() {
      overlay.style.display = "none";
  };
  // creates an overlay that contains a text box and a close button 
  overlay.appendChild(textBox);
  overlay.appendChild(closeButton);
  document.body.appendChild(overlay);

  // Makes the overlay page responsive
  overlay.style.display = "flex";
}

/*JavaScript to set variables for the selected options and then display the information in a message box*/
function getSelectedOption() {
            
            

  var selectElement = document.getElementById("monthSelect");

  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  var a = selectedOption;

  console.log(a);

  //Sets the the max number of days for each month in the month selection

  if ((a == "December 2023") || (a == "January 2024") || (a == "March 2024") || (a == "May 2024"))
  {d = 31}

  if ((a == "April 2024") || (a == "June 2024")) 
  { d = 30} 
  
  if (a == "February 2024")
  { d = 29}
  

  const dateInput = document.getElementById("date");
  const date = parseInt(dateInput.value); //Converts input to integer 
  
  const daysInput = document.getElementById("days");
  const days = parseInt(daysInput.value); //Converts input to integer 

//Test if date and days inputted variables are both empty

  if ((isNaN(date) || date === '') && (isNaN(days) || days === ''))
  {
    alert ("Please enter a valid day of the month (1-" + d + ")\nPlease enter a valid number of days (1-210)")

    return;
  }

  // Code ensures max date is 31 for months with 31 days and variable 'days' is in the range of 1 -210
  if (((a === "December 2023") || (a === "January 2024") || (a === "March 2024") || (a === "May 2024"))
    && ((date < 1 || date > 31) && (days < 1 || days > 210))) {
    //If not alert message and date and days are set to empty
    alert ("Please enter a valid day of the month (1-" + d + ")\nPlease enter a valid number of days (1-210)")
    document.getElementById('date').value = '';
    document.getElementById('days').value = '';

  return;
  }
  //Code ensures max date is 30 for months with 30 days and variable 'days' is in the range of 1 -210
  if (((a === "April 2024") || (a === "June 2024"))
    && ((date < 1 || date > 30) && (days < 1 || days > 210))) {
  //If not alert message and date and days are set to empty
    alert ("Please enter a valid day of the month (1-" + d + ")\nPlease enter a valid number of days (1-210)")
    document.getElementById('date').value = '';
    document.getElementById('days').value = '';

  return;
  }
  //Code ensures max date is 29 for February a leap year and variable 'days' is in the range of 1 -210
  if ((a === "February 2024")
    && ((date < 1 || date > 29) && (days < 1 || days > 210))) {
  //If not alert message and date and days are set to empty
    alert ("Please enter a valid day of the month (1-" + d + ")\nPlease enter a valid number of days (1-210)")
    document.getElementById('date').value = '';
    document.getElementById('days').value = '';

  return;
  }
  //Code ensures max date is 31 for months with 31 days and varible 'days' is already validated
  if (((a === "December 2023") || (a === "January 2024") || (a === "March 2024") || (a === "May 2024"))
    &&(date < 1 || date > 31)) {
    alert("Please enter a valid day of the month (1-" + d + ")");
    document.getElementById('date').value = '';
  
  return;
  }
    //Code ensures max date is 30 for months with 30 days and variable 'days' is already validated 
    if (((a === "April 2024") || (a === "June 2024"))
    &&(date < 1 || date > 30)) {
    alert("Please enter a valid day of the month (1-" + d + ")");
    document.getElementById('date').value = '';         
    
  return;
  }
  //Code ensures max date is 29 for February a leap year and variable 'days' is already validated 
  if ((a === "February 2024")
    &&(date < 1 || date > 29)) {
    alert("Please enter a valid day of the month (1-" + d + ")");
    document.getElementById('date').value = '';         
    
  return;
  }

  // If date is valid this code checks that variable 'days' is in the range of 1 to 210 and date is already validated
  if (days < 1 || days > 210) {
    alert("Please enter a valid number of days (1-210)");
    document.getElementById('days').value = '';

  return;
  }
   
  //Code ensures max date is 31 for months with 31 days and varible 'days' is empty
  if (((a === "December 2023") || (a === "January 2024") || (a === "March 2024") || (a === "May 2024"))
     && (date >= 1 && date <=31) &&  (isNaN(days) || days === '')){
     alert("Please enter a valid number of days (1-210)");

  return;
  }
      
   //Code ensures max date is 30 for months with 30 days and varible 'days' is empty
   if (((a === "April 2024") || (a === "June 2024"))
     && (date >= 1 && date <=30) &&  (isNaN(days) || days === '')){
     alert("Please enter a valid number of days (1-210)");

  return;
  }
    
  //Code ensures max date is 29 for February leap year and varible 'days' is empty
  if ((a === "February 2024")
     && (date >= 1 && date <=29) &&  (isNaN(days) || days === '')){
     alert("Please enter a valid number of days (1-210)");
  
  return;
  }
   
  //Variable 'days' is validated but variable 'date' is empty
  if ((days >= 1 && days <= 210) &&  (isNaN(date) || date === '')){
     alert("Please enter a valid day of the month (1-" + d + ")");

  return;
  }

  //Multiplies number of days by the length of stay in days and assigns the new value to variable 'formattedNumber'
  var number = days*RoomCost; 
  var formattedNumber = number.toLocaleString();
  console.log(formattedNumber); 

  //Displays booking details with associated variables
  var userResponse = window.confirm("Booking Details: \n"  + "\n" + "    Month Selected: "
  + a + "\n" + "    Date Selected: " + date + "\n" + "    Length of stay: " + days + " days" + "\n" + 
  "    Price per night: $" + RoomCost + "\n" + "    Total cost: $" + formattedNumber)  
  
  //If message box content is agreed the replace function is called to close the page and open the banking details page

  if (userResponse === true) {
  window.addEventListener('unload', replace());

  /*If message is canceled the newfrom function reloads the book in page*/

  } else {  newform();
  }

  //Assigns text strings for variables, total cost, the month selected, the day of the month selected
  document.getElementById("ammount").textContent = formattedNumber;

  document.getElementById("timeMonth").textContent = a;

  document.getElementById("timeDay").textContent = date; 
}

 /*This function examines the inputs for the banking details page and validates them*/  
 function validateAndSubmit() {
  // Get form input values

  const email = document.getElementById("email").value;
  const fullName = document.getElementById("fullName").value;
  const visaNumber = document.getElementById("visaNumber").value;
  const expiryDate = document.getElementById("expiryDate").value;
  const cvv = document.getElementById("cvv").value;

  // Regular expressions for validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const fullNameRegex = /^(.+)$/;
  const visaNumberRegex = /^\d{16}$/;
  const expiryDateRegex = /^\d{1,2}\/\d{2}(?:\d{2})?$/;
  const cvvRegex = /^\d{3}$/;

  // Validation checks with error messages for invalid inputs
  let isValid = true;
  let errorMessage = "";

  if (!email.match(emailRegex)) {
  isValid = false;
  errorMessage += "Please enter a valid email.\n";
  document.getElementById('email').value = '';
  }

  if (!fullName.match(fullNameRegex)) {
  isValid = false;
  errorMessage += "Please enter your name.\n";
  document.getElementById('fullName').value = '';
  }

  if (!visaNumber.match(visaNumberRegex)) {
  isValid = false;
  errorMessage += "Please enter a valid 16-digit VISA number.\n";
  document.getElementById('visaNumber').value = '';
  }

  if (!expiryDate.match(expiryDateRegex)) {
  isValid = false;
  errorMessage += "Please enter a valid expiry date. (Month / Year)\n";
  document.getElementById('expiryDate').value = '';
  }

  if (!cvv.match(cvvRegex)) {
  isValid = false;
  errorMessage += "Please enter a valid 3-digit CVV.\n";
  document.getElementById('cvv').value = '';
  }

  if (isValid) {
  // The form's iput fields are all validated, display a message box with the form details
  userResponse = window.confirm("Payment Details: \n"  + "\n" + "    Email: " 
              + email + "\n" + "    Name: " + fullName + "\n" + "    VISA number: " + visaNumber + "\n" +   "    Expiry Date: " + expiryDate
              + "\n" + "    CVV: " + cvv)

  // If message box is clicked okay the notice function is called to load the successful payment notification
  if (userResponse === true) {
  window.addEventListener('unload', notice());
    }
  // if message box is clicked cancel empty all fields of the payment form   
    if (userResponse === false) {
      document.getElementById('email').value = '';
      document.getElementById('fullName').value = '';
      document.getElementById('visaNumber').value = '';
      document.getElementById('expiryDate').value = '';
      document.getElementById('cvv').value = '';
    }

    } else {
  // If any of the input fields are invalid display the error message
    alert(errorMessage);
    }
  }
  //Toggles the hamburger menu from visible and the nav-items to hidden
  // Toggle the hamburger menu from hidden and the nav-items to visible
    function toggleMenu() {
        const navItems = document.querySelector('.nav-items');
        if (navItems.style.display === 'flex' )
        {
          navItems.style= "";
        }
        else
    
        {
          navItems.style.display ='flex';
        }
       
        
       
      }
    
    
    
   