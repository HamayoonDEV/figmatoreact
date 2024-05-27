import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <div>
        {" "}
        <Navbar />
      </div>
      <div className="mt-10">
        {" "}
        <Header />
      </div>
      <div className="mt-10">
        <Hero />
      </div>
      <div className="mt-10">
        <About />
      </div>
    </div>
  );
}

export default App;
