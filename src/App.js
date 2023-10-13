import './App.css';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import WelcomeMain from './components/WelcomeMain';
import background from "./WebpageBG.png"
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Navbar />
      <WelcomeMain />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
