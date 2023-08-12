import "./App.css";
import Navbar from "./components/header/Navbar";
import SignIn from "./pages/0.signin/SignIn";

function App() {
  return (
    <div className="w-screen h-screen bg-white-300">
      <Navbar/>
      <SignIn />
    </div>
  );
}

export default App;
