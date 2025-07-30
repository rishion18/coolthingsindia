import { Hero } from './components/Hero';
import { CuratedPicks } from './components/CuratedPicks';
import { HowWeHelp } from './components/HowWeHelp';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <CuratedPicks />
      <HowWeHelp />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}