import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Partnership from "./components/Partnership";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Company from "./components/Company";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Partnership />
      <hr className="mx-auto" style={{ width: "920px" }} />
      <About />
      <Testimonial />
      <Company />
      <Footer />
    </div>
  );
}

export default App;
