// MENU
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// OBRAZKY
const images = document.querySelectorAll(".images-section img");

images.forEach((oneImage) => {
  oneImage.addEventListener("mouseenter", () => {
    oneImage.style.transform = "scale(1.05)";
  });

  oneImage.addEventListener("mouseleave", () => {
    oneImage.style.transform = "scale(1)";
  });
});

//EMAILY
class TwoContentChecker {
  constructor(twoHTMLtags) {
    this.twoHTMLtags = twoHTMLtags;
  }

  getInputContent = (input) => {
    return input.value;
  };

  insertContent = (htmlTag, content) => {
    htmlTag.textContent = content;
  };

  addClass = (htmlTag, className) => {
    htmlTag.classList.add(className);
  };

  removeClass = (htmlTag, className) => {
    htmlTag.classList.remove(className);
  };

  htmlTagCleaner = (input1value, input2value, htmlTag) => {
    if (input1value === "" && input2value === "") {
      htmlTag.textContent = "";
    }
  };
}

const emailInputs = document.querySelectorAll(".email-input");
const paragraphText = document.querySelector(".result-text");
const inputChecker = new TwoContentChecker(emailInputs);

inputChecker.twoHTMLtags.forEach((savedInput) => {
  savedInput.addEventListener("input", () => {
    const email1Value = inputChecker.getInputContent(
      inputChecker.twoHTMLtags[0]
    );
    const email2Value = inputChecker.getInputContent(
      inputChecker.twoHTMLtags[1]
    );

    if (email1Value === email2Value) {
      inputChecker.insertContent(paragraphText, "Emaily jsou stejné");
      inputChecker.addClass(paragraphText, "valid");
      inputChecker.removeClass(paragraphText, "invalid");
    } else {
      inputChecker.insertContent(paragraphText, "Emaily se neshodují");
      inputChecker.addClass(paragraphText, "invalid");
      inputChecker.removeClass(paragraphText, "valid");
    }

    inputChecker.htmlTagCleaner(email1Value, email2Value, paragraphText);
  });
});

//DARK MODE/LIGHT MODE
function darkModeFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
onclick = "darkModeFunction()";

// const modesBtn = document.querySelectorAll(".modes-btn");
// const darkModeFunction = document.querySelector(".fa-sun");
// const lighModeFunction = document.querySelector(".fa-moon");

// modesBtn.addEventListener("click", () => {
//   darkModeFunction.classList.toggle("dark-mode");
//   lighModeFunction.classList.toggle("light-mode");
// });

//SCROLL TO TOP BUTTON
const buttonToTop = document.getElementById("goToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
