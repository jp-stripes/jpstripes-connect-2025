import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Themes from './components/Themes';
import Future from './components/Future';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <Hero />
      <Themes />
      <Future />
      <Countdown />
      <Footer />
    </div>
  );
}
