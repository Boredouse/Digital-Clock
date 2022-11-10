setInterval(GetTime, 1000);

function GetTime() {
  // Linking slider
  let toggle = document.querySelector('.toggle input') /* Assigning variable to parent of node in both isntances*/
  let onOff = toggle.parentNode.querySelector('.onoff')  /* Both of these assignments are directed to link the change in checkbox to change in text*/

  toggle.addEventListener('click', () => { /* toggle To analogue/digital if checkbox is ticked  */
    onOff.textContent = toggle.checked ? 'Analogue': 'Digital' /* If the tickbox is ticked, the span assigned to class 'onOff' will display text 'Analogue' */
  })

  // setting variables
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  
  // If true, add '0' before sec
  sec = sec < 10 ? '0' + sec : sec; 
  min = min < 10 ? '0' + min : min;
  hour = hour < 10 ? '0' + hour : hour;


  if (onOff.textContent == 'Analogue'){
    if (hour > 12 ) {
    hour = hour - 12
    sec = sec + 'PM'
    }
    else{
      sec = sec + 'AM'
    }
  }
  else{
    hour = hour
    sec = sec
  }
 

  // concatinating varibales to simplify
  let CurrentTime = `${hour} : ${min} : ${sec}`

  // linking to html doc to be displayed
  document.getElementById("clock-time").innerText = CurrentTime;

  
 

}





