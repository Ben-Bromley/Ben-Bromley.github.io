import '../styles/index.css';

function Nav() {
	return (
		<div id="nav-container" className="container">
			<nav>
				<ul id="navigation">
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#portfolio">Portfolio</a>
					</li>
					<li>
						<a href="#get-in-touch" className="highlight-link">
							Get In Touch
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
