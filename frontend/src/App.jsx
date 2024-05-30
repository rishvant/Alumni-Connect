import { useEffect } from "react";
import CarouselUI from "./components/Carousel";
import Footer from "./components/Footer";
import Gallery from "./components/gallery";
import Hero from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <CarouselUI />
      <Hero />
      <Gallery />
      <Footer />
    </>
  )
}

export default App;