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
    <div class="nav_bar">
    <nav class="nav_menu">
      <div class="form">
        <input class="search_input" type="text" placeholder="Search Items">
        <span class="fas ico"></span>
      </div>
      <span><i id="menu" class="fa-solid fa-bars"></i></span>
      <a href="index.html">Home</a>
      <a href="equipment.html">Equipment</a>
      <a href="furniture.html">Furniture</a>
      <a href="review.html">Review</a>
      <a href="basket.html">Basket</a>
      <a href="offer.html">Offer and Packages</a>
    </nav>
  </div>
      `;
  }
}

customElements.define("my-navbar", MyNavBar);
