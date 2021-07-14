import './styles/index.css';
import Nav from './components/nav.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';

function App() {
	return (
		// outer container
		<div>
			{/* floating nav */}
			<Nav />
			{/* separate container to remove displacement */}
			<div>
				<header id="header-landing" className="page">
					<div className="overlay overlay-top" />
					<div id="title-container" className="container">
						<h1 id="title">I design and build websites to help you grow your business</h1>
					</div>
					<div id="intro-text-container" className="container">
						<p id="intro-text">
							I'm an ex-student and developer, looking to expand my portfolio with high quality work. I
							start by establishing my clients needs, producing a design they love and that helps them
							reach their goals, and then build it from scratch, giving updates in every stage of the
							process, so that clients know exactly what they're getting and what they're paying for.
						</p>
					</div>
				</header>
				<About />
				<Portfolio />
				<Contact />
			</div>
		</div>
	);
}

export default App;
