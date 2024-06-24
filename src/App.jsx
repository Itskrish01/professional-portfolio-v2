import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import "swiper/css";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-auto">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </>
  );
};

export default App;
