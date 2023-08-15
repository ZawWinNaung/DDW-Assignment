let images = ["img_slide_1.jpg", "img_slide_2.jpg", "img_slide_3.jpg"];
let i = 0;
const changeImage = () => {
  i = i + 1;
  if (i == images.length) {
    i = 0;
  }
  header.style.backgroundImage =
    "linear-gradient(to bottom,rgba(13, 17, 23, 0.3),rgba(13, 17, 23, 1)),url(assets/images/" +
    images[i] +
    ")";
};

const addToBasket = (btn) => {
  let item = btn.parentNode;
  let children = item.children;
  let name = children[0].innerText;
  let price = children[1].innerText;
  let str = "<div class='basket'>";
  str += "<p>" + name + "</p>";
  str += "<p>" + price + "</p>";
  str += "</div>";

  if (sessionStorage.getItem("basket") == null) {
    sessionStorage.setItem("basket", str);
  } else {
    let prev = sessionStorage.getItem("basket");
    prev += str;
    sessionStorage.setItem("basket", prev);
  }

  $().msgpopup({
    text: name + " is successfully added to basket.",
    success: true,
    time: 5000,
    x: true,
  });
};

const showData = () => {
  basketData.innerHTML = sessionStorage.getItem("basket");
};

$(document).ready(function () {
  $(".ico").addClass("fa-minus blink rotate");
  $("input").focus(function () {
    $(".ico").addClass("fa-search search");
    $(".ico").removeClass("fa-minus blink");
  });
  $("input").focusout(function () {
    $(".ico").addClass("fa-minus blink");
    $(".ico").removeClass("fa-search search");
  });
});

var map = L.map("mapid").setView([51.505, -0.09], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

var marker = L.marker([51.505, -0.09]).addTo(map);

marker.bindPopup("<b>RCC</b><br>Retail Camping Company").openPopup();

var width = window.matchMedia("(min-width: 1000px)");
try {
  width.addEventListener("change", () => {
    var menu = document.getElementById("mobile-nav");
    var navBar = document.getElementById("navBar");
    if (width.matches) {
      menu.style.display = "none";
      navBar.style.background = "rgba(255, 255, 255, 0.2)";
    }
  });
} catch (e) {
  console.error(e);
}

function onMenuPress() {
  var menu = document.getElementById("mobile-nav");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }

  var navBar = document.getElementById("navBar");
  if (menu.style.display === "flex") {
    navBar.style.background = "#0d1117";
  } else {
    navBar.style.background = "rgba(255, 255, 255, 0.2)";
  }
}
