import './App.css';
import AboutPage from './Components/About/About';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div id="home" className="h-screen">
        <Home />
      </div>
      <div id="about" className="h-screen">
        <AboutPage />
      </div>
    </div>

  );
}

export default App;
