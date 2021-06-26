import '../styles/index.css';

function Nav() {
    return (
        <div id="nav-container">
            <nav>
                <ul id="navigation">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#" class="highlight-link">Get In Touch</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
