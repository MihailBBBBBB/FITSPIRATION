class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <h1 href='Main.html'>Fitspiration</h1>
            <div class="search-container">
                <input class="search-bar" type="text" placeholder="Search for styles, trends...">
            </div>
            <div class="buttons">
                <button class="login-btn" onclick="window.location.href='LogIn.html'">Log In</button>
                <button class="signup-btn" onclick="window.location.href='Registration.html'">Sign Up</button>
            </div>
        </header>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@fitspiration.com</p>
                    <p>Phone: +371 21235324</p>
                    <p>Address: Bultu iela 7, 5</p>
                </div>
                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <a href="https://facebook.com" target="_blank">Facebook</a>
                    <a href="https://instagram.com" target="_blank">Instagram</a>
                    <a href="https://twitter.com" target="_blank">Twitter</a>
                </div>
                <div class="footer-section">
                    <h4>Legal</h4>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Fitspiration. All rights reserved.</p>
            </div>
        </footer>
        `
    }
}

class SpecialAside extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <aside class="sidebar">
            <ul>
                <li><a href='Home.html'><i class="fas fa-house"></i> Home</a></li>
                <li><a href='Main.html'><i class="fas fa-th-large"></i> Categories</a></li>
                <li><a href='#'><i class="fas fa-bell"></i> Notifications</a></li>
            </ul>
        </aside>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
customElements.define('special-aside', SpecialAside)