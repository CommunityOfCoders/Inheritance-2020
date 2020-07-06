/*!
 * Basically Basic Jekyll Theme 1.4.4
 * Copyright 2017-2018 Michael Rose - mademistakes | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE
 */

var menuItems = document.querySelectorAll("#sidebar li");

// Get vendor transition property
var docElemStyle = document.documentElement.style;
var transitionProp =
  typeof docElemStyle.transition == "string"
    ? "transition"
    : "WebkitTransition";

// Animate sidebar menu items
function animateMenuItems() {
  for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
    // Stagger transition with transitionDelay
    item.style[transitionProp + "Delay"] = i * 75 + "ms";
    item.classList.toggle("is--moved");
  }
}

var myWrapper = document.querySelector(".wrapper");
var myMenu = document.querySelector(".sidebar");
var myToggle = document.querySelector(".toggle");
var myInitialContent = document.querySelector(".initial-content");
var mySearchContent = document.querySelector(".search-content");
var mySearchToggle = document.querySelector(".search-toggle");

// Toggle sidebar visibility
function toggleClassMenu() {
  myMenu.classList.add("is--animatable");
  if (!myMenu.classList.contains("is--visible")) {
    myMenu.classList.add("is--visible");
    myToggle.classList.add("open");
    myWrapper.classList.add("is--pushed");
  } else {
    myMenu.classList.remove("is--visible");
    myToggle.classList.remove("open");
    myWrapper.classList.remove("is--pushed");
  }
}

// Animation smoother
function OnTransitionEnd() {
  myMenu.classList.remove("is--animatable");
}

myMenu.addEventListener("transitionend", OnTransitionEnd, false);
myToggle.addEventListener(
  "click",
  function () {
    toggleClassMenu();
    animateMenuItems();
  },
  false
);
myMenu.addEventListener(
  "click",
  function () {
    toggleClassMenu();
    animateMenuItems();
  },
  false
);
if (mySearchToggle) {
  mySearchToggle.addEventListener(
    "click",
    function () {
      toggleClassSearch();
    },
    false
  );
}

// Toggle search input and content visibility
function toggleClassSearch() {
  mySearchContent.classList.toggle("is--visible");
  myInitialContent.classList.toggle("is--hidden");
  setTimeout(function () {
    document.querySelector(".search-content input").focus();
  }, 400);
}

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});

// Canvas stuff starts here
var ctx = document.getElementById("pieChart").getContext("2d");
// ctx.style.backgroundColor = "#263849";
ctx.scale(0.5, 0.5);
var myChart = new Chart(ctx, {
  type: "doughnut",
  options: {
    title: {
      display: true,
      position: "top",
      text: "Domains covered",
      fontSize: 20,
      fontColor: "#FFFFFF",
    },
    chartArea: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    legend: {
      position: "right",
      align: "start",
      labels: {
        fontColor: "#fff",
      }
    },
  },
  data: {
    labels: [
      "App Development",
      "Web Development",
      "ML & Web Development",
      "ML & App Development",
      "Game Development",
      "Blockchain",
    ],
    datasets: [
      {
        label: "Domains of teams",
        data: [16, 11, 7, 7, 1, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
});
