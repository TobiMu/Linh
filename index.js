
  $("document").ready(function(){
        $("body").css({background: "rgba(46, 49, 49, 1)"});
        $(".slider").css({visibility:"visible"});



  });


//Scroll to top button
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Toggle Nav button
var toggleButton = document.getElementsByClassName("toggle-button")[0];
var toggleLinks = document.getElementsByClassName("toggle-links")[0];

toggleButton.addEventListener("click", function(){
  toggleLinks.classList.toggle("active");
});

// Slideshow
var i;
var count = 0;
var slides = document.querySelectorAll(".slide");

function nextSlide(){

  for(i=0; i<slides.length; i++){
    slides[i].setAttribute("style", "display:none");
  }
  count++;
  if(count === slides.length){
    count = 0;
  }
  slides[count].setAttribute("style", "display:block");
}

function prevSlide(){

  for( i=0; i<slides.length; i++){
    slides[i].setAttribute("style", "display:none");
  }
  count--;
  if(count === -1){
    count= slides.length-1;
  }
  slides[count].setAttribute("style","display:block");
}
nextSlide();

//Pfeiltasten-Funktion
  document.addEventListener("keydown", function(event){
    const key = event.key;
    switch (event.key) {
        case "ArrowLeft":
            prevSlide();
            break;
        case "ArrowRight":
            nextSlide();
            break;
    }
});



//On Tour

var turniere = document.getElementsByClassName("onTour-li");
for(i=0; i < turniere.length; i++){

  turniere[i].onclick = function(index){

    for(k=0;k<turniere.length;k++){
      turniere[k].classList.remove("complete");

    }
    this.classList.add("complete");


};
}

// Kontaktform

  var submitButton = document.getElementsByClassName("contact-button")[0];

  submitButton.addEventListener("click", function(event){
    var mail = document.getElementById("InputEmail").value;
    var name = document.getElementById("InputName").value;
    var message = document.getElementById("InputMessage").value;
    if (name.length<2){
      event.preventDefault();
      alert("Bitte geben Sie einen Namen ein.");
    }
    if (message.length<2){
      event.preventDefault();
      alert("Bitte geben Sie eine Nachricht ein.");
    }
    if( mail.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)){
        return true;
    }

    else{
      event.preventDefault();
      alert("Bitte geben Sie eine gültige Email ein.");
    }

});
