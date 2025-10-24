import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Themes from './components/Themes';
import Future from './components/Future';
import Timetable from './components/Timetable';
import Venue from './components/Venue';
import Sponsors from './components/Sponsors';
import Party from './components/Party';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <Hero />
      <Themes />
      <Future />
      <Timetable />
      <Venue />
      <Sponsors />
      <Party />
      <Countdown />
      <Footer />
    </div>
  );
}
