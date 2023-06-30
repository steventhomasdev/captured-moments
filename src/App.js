import "./App.css"
import Header from "./components/Header/Header";
import AlbumCover from "./components/AlbumCover/AlbumCover";
import Collections from "./components/Collections/Collections";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AlbumCover></AlbumCover>
      <Collections></Collections>
    </div>
  );
}

export default App;
