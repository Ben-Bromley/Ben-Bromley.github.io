// import './App.css';
import './styles/styles.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="overlay"></div>
            <nav id="nav-container">
                <ul id="navigation">
                    <li><a>About</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Contact Me</a></li>
                </ul>
            </nav>
            <div id="title-container">
                <h1 id="title">I design and build websites to help you grow your business</h1>
            </div>
            <div id="intro-text-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae vero quas, fugiat voluptas mollitia itaque dolor quibusdam ipsum sapiente et nesciunt minus ut totam consequatur, quisquam amet commodi suscipit laborum natus magni libero qui soluta! Iste eos cum assumenda?</p>
            </div>
      </header>
    </div>
  );
}

export default App;
