import './App.css';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Coretech from './components/Coretech';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Workflow from './components/Workflow';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Services/>
      <Workflow/>
      <div className=" relative h-40" style={{"backgroundColor":"#f4f9ff"}}>
        <img className="w-1/3 relative -top-40 -left-28" src={process.env.PUBLIC_URL + '/assets/triangles-above-coretech.svg'} alt="" />
      </div>
      <Coretech/>
      <Testimonial/>
      <div className="relative w-screen max-w-full h-40 flex justify-end" style={{"backgroundColor":"#f4f9ff"}}>
        <img className="w-60 xl:w-96 absolute -top-40 right-0"
          src={process.env.PUBLIC_URL + '/assets/dots-blue.svg'} alt="" />
      </div>
      <CaseStudies/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
