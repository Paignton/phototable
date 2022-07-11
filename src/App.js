import logo from "./logo.svg";
import "./App.css";
import PhotoTable from "./components/PhotoTable";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <SignUp />
      <PhotoTable />
    </div>
  );
}

export default App;
