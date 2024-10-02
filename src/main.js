//reusable header and footer

class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="container-lg">
                <nav class="navbar  navbar-expand-lg" aria-label="Offcanvas navbar large">
                    <div class="container-lg">
                      <a class="navbar-brand" href="index.html">
                        <img src="images/logoBlack.svg" alt="flowers" width="54" height="21">
                      </a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div class="offcanvas-header">
                          <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas menu</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-between gap-3 ">
                            <li class="nav-item">
                              <a class="nav-link text-black" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link text-black" href="productDetails.html">Product</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link text-black" href="blog.html">Blog</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link text-black" href="login.html">Login</a>
                            </li>
                          </ul>
                          <a class="nav-item">
                            <button class="btn py-2 px-3" type="submit"><img src="images/profileBlack.svg" alt="profile"></button>
                          </a>
                          <a class="nav-item">
                              <button class="btn py-2 px-3" type="submit"><img src="images/cartBlack.svg" alt="profile"></button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
            </div>
          </header>`
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
      <section style="background-color: rgb(218, 218, 218);">
        <div class="container-lg p-5">
            <div class="row row-cols-3 row-cols-md-6 g-3">
                <div class="col text-center">
                    <a href="#">
                        <img src="images/logo1.svg" alt="Wishbone" width="80" height="24">
                    </a>
                </div>
                <div class="col text-center">
                    <a href="#">
                        <img src="images/logo2.svg" alt="Wishbone" width="80" height="24">
                    </a>
                </div>
                <div class="col text-center">
                    <a href="#">
                        <img src="images/logo3.svg" alt="Wishbone" width="80" height="24">
                    </a>
                </div>
                <div class="col text-center">
                    <a href="#">
                        <img src="images/logo4.svg" alt="Wishbone" width="80" height="24">
                    </a>
                </div>
                <div class="col text-center">
                    <a href="#">
                        <img src="images/logo5.svg" alt="Wishbone" width="80" height="24">
                    </a>
                </div>
                <div class="col text-center">
                    <a href="#">
                        <img src="images/logo6.svg" alt="Wishbone" width="80" height="24">
                    </a>
                </div>
            </div>
        </div>
    </section>
    <div style="background-color: rgb(16, 16, 16);">
      <div class="container-fluid pt-5">
          <div class="row d-flex justify-content-center mt-5">
              <div class="col-12 col-md-6 d-flex flex-column justify-content-center gap-4">
                  <a class="navbar-brand text-center" href="#">
                      <img src="images/logo.svg" alt="flowers" width="144" height="55">
                  </a>
                  <h2 class="display-6 text-white text-center">Subscribe To Your Newsletter to Stay Updated About Discounts</h2>
                  <form class="d-flex justify-content-center pb-5 ">
                      <div class=" mb-md-5 posi">
                          <input type="text" class="form-control rounded-pill p-3" placeholder="Search An Item" aria-label="Recipient's username" aria-describedby="button-addon2">
                          <button class="btn btn-dark rounded-circle lh-1 p-0 btn-inside" type="button" id="button-addon2"><img src="images/search.svg" alt="search"></button>
                      </div>
                  </form>
              </div>
          </div>
              <nav>
                  <ul class="nav d-flex justify-content-around pb-5 mx-lg-5">
                      <li class="nav-item">
                          <a class="nav-link text-uppercase text-white" href="index.html">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link text-uppercase text-white" href="productDetails.html">Product</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link text-uppercase text-white" href="blog.html">Blog</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link text-uppercase text-white" href="login.html">Login</a>
                      </li>
                  </ul>
              </nav>
              <div class="row">
                  <div class="col-12 text-center p-4 border-top">
                      <span class="text-white text-center">Copyright © 2023 Renew Bariatrics, Inc </span>
                  </div>
              </div>
      </div>
    </div>
    </footer>`
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)



//text color change in offcanvas

const offcanvasElement = document.getElementById('offcanvasNavbar2');

offcanvasElement.addEventListener('show.bs.offcanvas', function () {
    const navLinks = offcanvasElement.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.add('text-custom'); 
    });
});

offcanvasElement.addEventListener('hide.bs.offcanvas', function () {
    const navLinks = offcanvasElement.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('text-custom'); 
    });
});

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


//form alert

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (this.checkValidity()) {
        document.getElementById('alert').style.display = 'block';
        this.reset();
    }
});