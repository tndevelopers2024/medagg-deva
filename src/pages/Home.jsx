import Hero from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Header";
import FaqSection from "../components/home/Faq";
import ConditionMenu from "../components/layout/ConditionMenu";
import Header from "../components/layout/Header";
import OurServises from "../components/home/OurServices";
import BotServices from "../components/home/BotServices";
import PatientServices from "../components/home/PatientServices";
import AppBooking from "../components/home/AppBooking";
import WhyMedagg from "../components/home/WhyMedagg";
import OurDoctor from "../components/home/OurDoctor";
import PatientSay from "../components/home/PatientSay";
import ConsultExpo from "../components/home/ConsultExpo";
import FAQSection from "../components/home/FAQSection";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ConditionMenu />
      <main className="flex-grow">
        <Hero />
        <ServicesSection/>
        <OurServises />
        <BotServices/>
        <PatientServices/>
        <AppBooking />
        <WhyMedagg />
        <OurDoctor />
        <PatientSay />
        <ConsultExpo />
        <FAQSection />
        <Footer />
      </main>  
    </div>
  );
};

export default Home;
