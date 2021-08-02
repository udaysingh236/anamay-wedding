(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

// Set the date we're counting down to
const countDownDate = new Date("Nov 29, 2021 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

    // Get todays date and time
    let now = new Date().getTime();
    
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = `<div class="container text-center">
    <div class="row">
      <div class="col-md-12 col-md-offset-2 text-center">
       <div class="simply-countdown">
          <div class="simply-days-section">
             <div>
                <span class="simply-amount">${days}</span>
                <span class="simply-word">Days</span>
             </div>
          </div>
          <div class="simply-days-section">
             <div>
                <span class="simply-amount">${hours}</span>
                <span class="simply-word">Hours</span>
             </div>
          </div>
          <div class="simply-days-section">
             <div>
                <span class="simply-amount">${minutes}</span>
                <span class="simply-word">Minutes</span>
             </div>
          </div>
          <div class="simply-days-section">
             <div>
                <span class="simply-amount">${seconds}</span>
                <span class="simply-word">Seconds</span>
             </div>
          </div>
       </div>
      </div>
    </div>
  </div>
`;

    console.log(`distance ${distance}`);
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);


