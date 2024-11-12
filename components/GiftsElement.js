class GiftsElement extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
  <section id="gifts" class="gifts">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-10 text-center">
          <span>ungkapan tanda kasih</span>
          <h2>Kirim Hadiah</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure perferendis provident ab aliquam nemo.
          </p>
        </div>
      </div>

      <div class="row justify-content-center text-center">
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item">
              <div class="fw-bold">BSI</div>
              123456789 - BAYU WINATA
            </li>
            <li class="list-group-item">
              <div class="fw-bold">DANA</div>
              123456788 - BAYU WINATA
            </li>
            <li class="list-group-item">
              <div class="fw-bold">Saweria</div>
              <img src="img/saweria.png" alt="Saweria QR" class="img-thumbnail" width="150">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    `;
	}
}

// Mendefinisikan custom element dengan nama <footer-element>
customElements.define('gifts-element', GiftsElement);

// Mengekspor FooterElement
export default GiftsElement;
