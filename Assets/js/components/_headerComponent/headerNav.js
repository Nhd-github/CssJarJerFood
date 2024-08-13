
const template = document.createElement('template')
template.innerHTML = `<link rel="stylesheet" href="./Assets/css/_top-nav.css">
                      <link rel="stylesheet" href="./Assets/css/bootstrap.rtl.min.css">
                          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.css"></link>
                  
                           <div class=" d-flex col-sm-12 col-md-3 ">
                                <img class="p-1" src="/Assets/img/fork.png">
                                <div class="flex-column">
                                    <span class="text-dark m-0 d-inline-block font-30"> JarJer </span>
                                    <span class="text-dark d-inline-block"> Food Delivery </span>
                                </div>

                            </div>
                            <div class="d-flex  col-sm-12 col-md-4 align-items-center justify-content-between m-3 ">
                                <div class="d-flex align-items-center">
                                    <img class="category" src="/Assets/img/category.png"></img>
                                    <span class="text-dark"> Category </span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <img class="phone-contact" src="/Assets/img/phone.png"></img>
                                    <span class="text-dark "> Contact Us </span>
                                </div>
                            </div>
                            <div
                                class=" social-icons col-sm-12 col-md-5 d-flex justify-content-center align-items-center text-dark ">
                                <ul class="nav d-flex align-items-center justify-content-center p-0">
                                    <li class="nav-item">
                                        <a class="nav-link top-nav-facebbok " aria-current="page" href="#"><i
                                                class="fa-brands fa-facebook text-dark"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link top-nav-youtube " aria-current="page" href="#"><i
                                                class="fa-brands fa-youtube text-dark"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link top-nav-twittwe" href="#"> <i
                                                class="fa-brands fa-twitter text-dark"></i>
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link top-nav-instagram" href="#"> <i
                                                class="fa-brands fa-instagram text-dark"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link top-nav-linkedin"><i class="fab fa-linkedin text-dark"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
`
class Header extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

}
export { Header }