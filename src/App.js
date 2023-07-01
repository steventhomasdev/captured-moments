import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import "./App.css"
import Header from "./components/Header/Header";
import AlbumCover from "./components/AlbumCover/AlbumCover";
import Collections from "./components/Collections/Collections";
import Footer from './components/Footer/Footer';

library.add(fas, faTwitter, faFontAwesome)

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AlbumCover></AlbumCover>
      <Collections></Collections>
      <Footer></Footer>
    </div>
  );
}

export default App;
