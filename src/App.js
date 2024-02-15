import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import About from './components/AboutSection/About';
import Features from './components/FeaturesSection/Features';
import Price from './components/PriceSection/Price';
import Gallery from './components/GallerySection/Gallery';
import Footer from './components/FooterSection/Footer';


const App = () => {
  const plans = [
    {
      type: 'basic',
      name: 'basic plan',
      price: 1500,
      features: ['personal training', 'cardio exercise', 'weight lifting', 'diet plans', 'overall results']
    },
    {
      type: 'premium',
      name: 'premium plan',
      price: 3000,
      features: ['personal training', 'cardio exercise', 'weight lifting', 'diet plans', 'overall results']
    },
    {
      type: 'premium',
      name: 'premium plan',
      price: 5000,
      features: ['personal training', 'cardio exercise', 'weight lifting', 'diet plans', 'overall results']
    }
  ];


  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Features></Features>
      <Price plans={plans}></Price>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  )
}

export default App


