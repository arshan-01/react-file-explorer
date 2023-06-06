import logo from "./logo.svg";
import "./App.css";
import Folder from "./components/Folder";
import { explorer } from "./Data/explorer";

function App() {
  return <Folder explorer={explorer} />;
}

export default App;
