import "primereact/resources/themes/lara-light-cyan/theme.css";
import PlaylistsView from "./playlists/containers/PlaylistsView";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-2xl text-emerald-800">Witaj w React!</h1>
        <PlaylistsView />

        {/* <Button severity="success">Test</Button> */}
      </div>
    </>
  );
}

export default App;
