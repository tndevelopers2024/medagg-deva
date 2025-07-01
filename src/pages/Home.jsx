import Hero from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Header";
import FaqSection from "../components/home/Faq";
import ConditionMenu from "../components/layout/ConditionMenu";
import Header from "../components/layout/Header";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ConditionMenu />
      <main className="flex-grow">
        <Hero />
      

      </main>  
      
      <Footer />
    </div>
  );
};

export default Home;
