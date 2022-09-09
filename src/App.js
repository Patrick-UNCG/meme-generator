
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
      <div className="footer">
        <a href="https://github.com/Patrick-UNCG/meme-generator"><i id="github-link" class="fa-brands fa-github"></i></a>
      </div>
    </div>
  );
}

export default App;
