import './Navbar.css'

function navbar() {
   
    return (
        <nav>
        <div class="navbar__container">
          <a href="#home" id="navbar__logo"> Daniel Gutierrez</a>
          <div class="navbar__toggle" id="mobile-menu">
            <span class="bar"></span> <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class="navbar__menu">
            <li class="navbar__item">
              <a href="#home" class="navbar__links" id="home-page">Home</a>
            </li>
            <li class="navbar__item">
              <a href="#work" class="navbar__links" id="work-page">Work</a>
            </li>
            <li class="navbar__item">
              <a href="#projects" class="navbar__links" id="projects-page"
                >Projects</a>
            </li>
            <li class="navbar__btn">
              <a href="#sign-up" class="button" id="signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
  
    )
    
}

export default navbar