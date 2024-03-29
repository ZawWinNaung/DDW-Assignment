class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div id="social">
          <a href="https://www.facebook.com"
            ><i class="fa-brands fa-facebook-f"></i
          ></a>
          <a href="https://www.twitter.com"
            ><i class="fa-brands fa-twitter"></i
          ></a>
          <a href="https://www.instagram.com"
            ><i class="fa-brands fa-instagram"></i
          ></a>
        </div>
        <p>All right reserved.</p>
        <p>2023 -2023</p>
      `;
  }
}

customElements.define("my-footer", MyFooter);

class MyNavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="nav_bar" id="navBar">
    <nav class="nav_menu">
    <span><i id="menu" class="fa-solid fa-bars" onclick="onMenuPress()"></i></span>
      <div><img id="logo" src="assets/images/logo.png" alt="Logo"></div>
      <div id="desktop-nav">
        <a href="index.html">Home</a>
        <a href="equipment.html">Equipment</a>
        <a href="furniture.html">Furniture</a>
        <a href="review.html">Review</a>
        <a href="basket.html">Basket</a>
        <a href="offer.html">Offer and Packages</a>
      </div>
      <div class="form">
        <input class="search_input" type="text" placeholder="Search Items">
        <span class="fas ico"></span>
      </div>
    </nav>
    <div id="mobile-nav">
      <a href="index.html">Home</a>
      <a href="equipment.html">Equipment</a>
      <a href="furniture.html">Furniture</a>
      <a href="review.html">Review</a>
      <a href="basket.html">Basket</a>
      <a href="offer.html">Offer and Packages</a>
      </div>
  </div>
      `;
  }
}

customElements.define("my-navbar", MyNavBar);
