import imageInSrc from './imageInSrc.jpg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:"solid 1px black;max-width:100vw"}}>
      <h1 class="title red">Your name here</h1>
      <br />
      <img src={imageInSrc} alt="Baseet" className='imageStyle' />
      <br />
      <img src="/imageInPublic.jpg" alt="Shafik Habar" className='imageStyle' />

      </div>
      <video width="320" height="240" controls>
        <source src="/shafikVedio.mp4" type="video/mp4" />
       </video>
      </header>
    </div>
  );
}

export default App;