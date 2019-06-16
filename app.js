class Typewriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;

    //   Get full text of current word
    const fullTxt = this.words[current];

    //   Check if deleting
    if (this.isDeleting) {
      // Remove Char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add Char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //   Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //  Initial  Type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //  If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //   Make pause at end
      typeSpeed = this.wait;

      // set isdeleting to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;

      // MOve to next word
      this.wordIndex++;

      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  //   Init Typewriter
  new Typewriter(txtElement, words, wait);
}

// Add animation on scroll
document.addEventListener("scroll", addAnimation);

function addAnimation() {
  if (window.scrollY > 140) {
    document.querySelector(".inner-div-1").style.animationName = "inner1";
    document.querySelector(".inner-div-2").style.animationName = "inner2";
    document.querySelector(".inner-div-3").style.animationName = "inner3";
    document.querySelector(".inner-div-4").style.animationName = "inner4";
    document.querySelector(".inner-div-5").style.animationName = "inner5";
    document.querySelector(".inner-div-6").style.animationName = "inner6";
    document.querySelector(".inner-div-7").style.animationName = "inner7";
  } else if (window.scrollY > 95) {
    document.querySelector(".inner-div-1").style.animationName = "inner1";
  } else {
    document.querySelector(".inner-div-1").style.animationName = "inner1";
    document.querySelector(".inner-div-2").style.animationName = "inner2";
    document.querySelector(".inner-div-3").style.animationName = "inner3";
    document.querySelector(".inner-div-4").style.animationName = "inner4";
    document.querySelector(".inner-div-5").style.animationName = "inner5";
    document.querySelector(".inner-div-6").style.animationName = "inner6";
    document.querySelector(".inner-div-7").style.animationName = "inner7";
  }
}
