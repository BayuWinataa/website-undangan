class HomeElement extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
    <section id="home" class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h2>Acara Pernikahan</h2>
          <h3>Diselenggarakan pada 1 Januari 2025 di Stungkit, Langkat.</h3>
          <p>Oleh karena itu, dengan segala hormat, kami bermaksud untuk mengundang Bapak/Ibu, Saudara/i, untuk hadir
            pada acara pernikahan kami. </p>
        </div>
      </div>

      <div class="row couple">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-8 text-end">
              <h3>Bayu </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium aut ipsa perferendis,
                incidunt soluta?</p>
              <p>Putra dari Bpk. Lorem <br> dan <br> Ibu Ipsum</p>
            </div>
            <div class="col-4">
              <img src="img/default.jpg" alt=" Bayu" class="img-responsive rounded-circle">
            </div>
          </div>
        </div>

        <span class="heart"><i class="bi bi-heart-fill"></i></span>

        <div class="col-lg-6">
          <div class="row">
            <div class="col-4">
              <img src="img/default.jpg" alt="Bayu" class="img-responsive rounded-circle">
            </div>
            <div class="col-8">
              <h3>Winata</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium aut ipsa perferendis,
                incidunt soluta?</p>
              <p>Putra dari Bpk. Ipsum <br> dan <br> Ibu Lorem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    `;
	}
}

// Mendefinisikan custom element dengan nama <footer-element>
customElements.define('home-element', HomeElement);

// Mengekspor FooterElement
export default HomeElement;
