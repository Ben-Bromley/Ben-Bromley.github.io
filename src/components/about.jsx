import profileImage from '../assets/profileImage.jpeg';

function About() {
	return (
		<article id="about" className="page">
			<div className="overlay overlay-2" />
			<div id="about-content-container" className="container">
				<div className="img-container">
					<img id="headshot" src={profileImage} alt="Headshot" />
				</div>
				{/* <div className="divider"></div> */}
				<div className="content-container">
					<h2>About</h2>
					<p>
						Hi, I'm Ben. I'm a web designer &amp; developer. Having recently completed my A-Level studies in
						Music, Music Technology, and Computer Science, I'm delving deeper into the world of development.{' '}
					</p>
					<p>
						I currently work with HTML, SASS, and JavaScript to build websites that are adored by my clients
						and their audience.
					</p>
					<p>
						I love both creativity and problem solving. For years I've been able to solve the Rubiks cube in
						under 30 seconds, whilst also learning the piano, guitar, and a variety of other instruments. I
						find front-end web design &amp; development to be the best use of my passion for these two
					</p>
				</div>
			</div>
		</article>
	);
}

export default About;
