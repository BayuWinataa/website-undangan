class FooterElement extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <footer>
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <small class="block">&copy; 2024 All Rights Reserved</small>
              <small class="block">Design by <a href="https://instagram.com/bayuwinata__">@BayuWinata</a></small>

              <ul class="mt-3">
                <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                <li><a href="#"><i class="bi bi-youtube"></i></a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                <li><a href="#"><i class="bi bi-tiktok"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    `;
	}
}

// Mendefinisikan custom element dengan nama <footer-element>
customElements.define('footer-element', FooterElement);

// Mengekspor FooterElement
export default FooterElement;
