/* JavaScript for the slideshow */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Submit button triggers a thank you message*/

document.getElementById("submitbutton").addEventListener("click", displayConfirmation);

  function displayConfirmation() {
    var elmnt = document.getElementById("form");
    elmnt.remove();
    var newParagraph = document.createElement('p');
    newParagraph.innerText = 'Thank you for signing up to our newsletter!';
    document.body.appendChild(newParagraph);
}
