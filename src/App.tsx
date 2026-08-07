import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <WhyChooseUs />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div> 
  );
}

export default App;
