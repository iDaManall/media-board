import './App.css'
import Card from './components/Card'
import howlsImage from './assets/howls.jpg'; // Import the image
import threeIdiots from './assets/3idiots.png';
import bttf from './assets/backtothefuture.jpg';
import aos from './assets/alchemyofsouls.jpg';
import mountainmoon from './assets/mountainmoon.jpg';
import skycotl from './assets/skycotl.jpeg';
import irongiant from './assets/irongiant.jpeg';
import orv from './assets/orv.jpeg';
import gravityfalls from './assets/gravityfalls.jpeg';
import geass from './assets/geass.jpeg';
import horimiya from './assets/horimiya.jpeg';

// function App() {
const App = () => {
  return (
    <div className="App">
      <h1>A Small Diverse Media Library</h1>
      <h2>perhaps to invoke some nostalgia, or explore something new</h2>
      <div className="card-container">
        <Card img= {howlsImage} title="Howl's Moving Castle" description="Anime Movie" link="https://youtu.be/iwROgK94zcM?si=T27zJjODE2jxLgqZ"/>
        <Card img= {aos} title="Alchemy of Souls" description="Korean Drama" link="https://youtu.be/50kLmhGpt1s?si=9kKQppkJvrALPQT9"/>
        <Card img= {bttf} title="Back To The Future" description="Hollywood Movie" link="https://youtu.be/qvsgGtivCgs?si=3yL6t7ZnpJ4OZtsF"/>
        <Card img= {geass} title="Code Geauss" description="Anime Series" link="https://youtu.be/ulQGo6X7kFo?si=4bGCzuxo-WdL7snB"/>
        <Card img= {orv} title="Omniscient Reader's Viewpoint" description="Webtoon" link="https://www.webtoons.com/en/action/omniscient-reader/episode-0-prologue/viewer?title_no=2154&episode_no=1"/>
        <Card img= {threeIdiots} title="3 Idiots" description="Bollywood Movie" link="https://youtu.be/K0eDlFX9GMc?si=nbf7Jz6DvOVPeVIu"/>
        <Card img= {mountainmoon} title="Where The Mountain Meets The Moon" description="Book" link="https://www.google.com/books/edition/Where_the_Mountain_Meets_the_Moon_Newber/XJz-ahs1NrUC?hl=en&gbpv=1&printsec=frontcover"/>
        <Card img= {skycotl} title="Sky Children Of The Light" description="Videogame" link="https://www.thatskygame.com/"/>
        <Card img= {irongiant} title="The Iron Giant" description="Western Animation Movie" link="https://youtu.be/obLtyj8hfFk?si=jnDjuiTV8Z3OBui7"/>
        <Card img= {gravityfalls} title="Gravity Falls" description="Western Animated Series" link="https://www.youtube.com/watch?v=o2E2wLm_LlY"/>
        <Card img= {horimiya} title="Horimiya" description="Manga" link="https://read-horimiya.online/"/>
      </div>
    </div>
  )
}

export default App