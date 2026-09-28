class MainMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template();
  }

  template() {
    return `
<nav class="nav nav-main">
  <a href="#" class="logo">
    MEXICO
  </a>
  <ul>
    <li>
      <a href="index.html">Mexican Independence</a>
    </li>
    <li>
      <a href="history.html">History</a>
    </li>
    <li class="dropdown">
      <a href="menu.html">Menu</a>
      <ul class="dropdown-menu">
        <li>
          <a href="aztecas.html">Aztecas</a>
        </li>
        <li>
          <a href="mayas.html">Mayas</a>
        </li>
        <li>
          <a href="revolution.html">Revolution</a>
        </li>
        <li>
          <a href="index.html">Independence</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="contact.html">Contact</a>
    </li>
    <button class="btn">Sign Up</button>
  </ul>
</nav>
<style>
nav {
  display:flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}


/* Logo */
.logo {
  color: green;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}

/* Navigation list */
ul {
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
}

/* Navigation links */
ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

/* Hover effect */
ul li a:hover {
  color: green;
}

/* Dropdown parent */
.dropdown {
    position: relative;
}

/* Hide dropdown by default */
.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 180px;
    
    background-color: #1f2937;
}

/* Show dropdown when mouse is over Menu */
.dropdown:hover .dropdown-menu {
    display: block;
}

/* Sign Up button */
.btn {
  background-color: #eb253f;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
}

/* Button hover */
.btn:hover {
  background-color: #d81d1d;
}


</style>

`;
  }
}

window.customElements.define("main-navbar", MainMenu);
