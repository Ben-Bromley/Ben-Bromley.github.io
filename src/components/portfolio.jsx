function Portfolio() {
	return (
		<article id="portfolio" className="page">
			<div className="overlay overlay-2" />
			<div id="portfolio-container" className="container">
				<div className="container content-container portfolio">
					<h2>Portfolio</h2>
					<p className="portfolio-intro">
						I am in the early days of my freelance development, and have fewer projects than most in my
						portfolio, but that is simply from balancing studies and freelance work simultaneously.
					</p>
					<p className="portfolio-intro">
						Having now finished my studies, I am able to allocate much more time to providing my web design
						and development services
					</p>
				</div>
				<div className="container content-container portfolio">
					<h3 id="work-title">Left Bank Canoe Hire</h3>
					<p id="work-subtitle">Web Design &amp; Development | Feb 2021</p>
					<p className="work-info">
						Left Bank asked for a design refresh on a site they already loved, that’s exactly what they got.
						We had great communication throughout the project, and they were thoroughly satisfied with the
						end result
					</p>
					<p className="work-info">
						I used Figma to design their site, and built it in VS code with HTML, SASS, and JavaScript.
					</p>
				</div>
			</div>
		</article>
	);
}

export default Portfolio;
