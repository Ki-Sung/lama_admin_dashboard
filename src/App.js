import Sidbar from "./components/sidebar/Sidbar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidbar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
