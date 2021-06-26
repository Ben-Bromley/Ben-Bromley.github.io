import './styles/index.css';
import Nav from './components/nav.jsx';

function App() {
  return (
    <div>
      <header class="main-header">
        <div id="overlay"></div>
        <Nav />
        <div id="title-container">
          <h1 id="title">I design and build websites to help you grow your busniess</h1>
        </div>
        <div id="intro-text-container">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tenetur delectus earum dignissimos, eum eveniet fuga quos dolor veritatis, quisquam molestiae, nihil facilis. Rem quasi totam nostrum. Nam quos repellat, fugiat omnis eveniet culpa voluptas sequi rem tenetur reprehenderit. A.</p>
        </div>
      </header>
      <div>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat hic nihil unde delectus maiores nisi! In quae neque ut porro beatae atque voluptate tempora nulla provident quibusdam aut accusamus minima nostrum architecto possimus quaerat inventore omnis molestias, enim doloremque qui.</p>
      </div>
    </div>
  );
}

export default App;
