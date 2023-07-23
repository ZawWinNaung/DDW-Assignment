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
