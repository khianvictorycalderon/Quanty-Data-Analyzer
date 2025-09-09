import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import OpSec from "./components/opsec";
import Privacy_Terms from "./components/privac&terms";
import { slideToID } from "./utility";

export default function App() {

  const heroHeading = "Quanty: Data Analyzer";
  const heroSubHeading = "Analyze mean, median, mode, range, variance, and standard deviation instantly!";

  return (
    <>
      <NavBar/>
      <Hero 
        heading={heroHeading}
        subheading={heroSubHeading}
        buttonLabel="Get Started"
        buttonOnClick={() => slideToID("opsec", 70)}
      />
      <div id="opsec"/>
      <OpSec/>
      <About/>
      <Privacy_Terms/>
      <Footer/>
    </>
  )
}