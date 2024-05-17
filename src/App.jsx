import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Tours from "./components/Tours";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />

      <script src="./js/app.js"></script>
    </>
  );
};

export default App;
