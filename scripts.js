window.onscroll = function () {
  stickNav();
};

var navbar = document.getElementById("stickyNav");

var sticky = navbar.offsetTop;

function stickNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let slideIndex = 0;
showThumbnails(slideIndex);

function showThumbnails(n) {
  let i;
  let thumbnails = document.getElementsByClassName("thumbnail");
  let thumbnailsLength = thumbnails.length;

  let dots = document.getElementsByClassName("dot");
  let carousel = document.getElementById("carousel");
  let currActive = 0;

  for (j = 0; j < dots.length; j++) {
    if (dots[j].classList.contains("active")) {
      dots[j].classList.remove("active");
      currActive = j;
      break;
    }
  }

  if (n > currActive) {
    for (i = currActive; i < n; i++) {
      carousel.appendChild(thumbnails[0]);
    }
  } else if (n < currActive) {
    console.log("goingBackwards");
    for (i = currActive; i > n; i--) {
      carousel.prepend(thumbnails[thumbnailsLength - 1]);
    }
  }

  dots[n].classList.add("active");
}

function showContent(containerTab) {
  let showTab = document.getElementById(containerTab);
  showTab.classList.add("selected");
  showTab.style.display = "flex";

  if (containerTab == "contentTab1Container") {
    let hideContent = document.getElementById("contentTab2Container");
    hideContent.style.display = "none";

    let hideTab = document.getElementById("tab2");
    hideTab.classList.remove("selected");

    let selectTab = document.getElementById("tab1");
    selectTab.classList.add("selected");
  } else {
    let hideContent = document.getElementById("contentTab1Container");
    hideContent.style.display = "none";

    let hideTab = document.getElementById("tab1");
    hideTab.classList.remove("selected");

    let selectTab = document.getElementById("tab2");
    selectTab.classList.add("selected");
  }
}
