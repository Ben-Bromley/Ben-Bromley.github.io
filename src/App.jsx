import './styles/index.css';
import Nav from './components/nav.jsx';
import profileImage from './assets/profileImage.jpeg';

function App() {
  return (
    // outer container
    <div>
      {/* floating nav */}
      <Nav />
      {/* separate container to remove displacement */}
      <div>
        <header id="header-landing" className="page">
          <div className="overlay overlay-top"></div>
          <div id="title-container" className="container">
            <h1 id="title">I design and build websites to help you grow your busniess</h1>
          </div>
          <div id="intro-text-container" className="container">
            <p id="intro-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tenetur delectus earum dignissimos, eum eveniet fuga quos dolor veritatis, quisquam molestiae, nihil facilis. Rem quasi totam nostrum. Nam quos repellat, fugiat omnis eveniet culpa voluptas sequi rem tenetur reprehenderit. A.</p>
          </div>
        </header>
        <article id="about" className="page">
          <div className="overlay overlay-2"></div>
          <div id="about-content-container" className="container">
            <div className="img-container">
              <img id="headshot" src={profileImage} alt="Headshot" />
            </div>
            {/* <div className="divider"></div> */}
            <div className="content-container">
              <h2>About</h2>
              <p>Hi, I'm Ben. I'm a web designer &amp; developer. Having recently completed my A-Level studies in Music, Music Technology, and Computer Science, I'm delving deeper into the world of development. </p>
              <p>I currently work with HTML, SASS, and JavaScript to build websites that are adored by my clients and their audience.</p>
              <p>I love both creativity and problem solving. For years I've been able to solve the Rubiks cube in under 30 seconds, whilst also learning the piano, guitar, and a variety of other instruments. I find front-end web design &amp; development to be the best use of my passion for these two</p>
            </div>
          </div>
        </article>
        <article id="portfolio" className="page">
          <div className="overlay overlay-2"></div>
          <div className="container">
            <h2>Portfolio</h2>
          </div>
          <div className="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat hic nihil unde delectus maiores nisi! In quae neque ut porro beatae atque voluptate tempora nulla provident quibusdam aut accusamus minima nostrum architecto possimus quaerat inventore omnis molestias, enim doloremque qui.</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
