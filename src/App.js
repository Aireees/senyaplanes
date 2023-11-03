import './App.css';
import FirstView from './sections/firstView/firstView';
import AboutUs from './sections/aboutUs/aboutUs';
import Advantages from './sections/advantages/advantages';
import FlightChoose from './sections/flightChoose/flight';
import Flight2Choose from './sections/flightChoose/flight2';
import Flight3Choose from './sections/flightChoose/flight3';
import Presents from './sections/presents/presents';
import HowToCome from './sections/hotToCome/hotToCome';
import OurPilots from './sections/ourPilots/pilots';
import Request from './sections/request/request';
import Footer from './sections/footer/footer';
import Header from './sections/header/header';
function App() {
  return (
    <div className="App">
      <Header/>
      <FirstView/>
      <div className='app_padding'>
        <AboutUs/>
        <Advantages/>
        <FlightChoose/>
        <Flight2Choose/>
        <Flight3Choose/>
        <Presents/>
        <HowToCome/>
        <OurPilots/>
        <Request/>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
