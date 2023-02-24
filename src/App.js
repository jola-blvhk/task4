import Header from './components/header/header.component';
import FirstSection from './components/firstsection/firstsection.component';
import './App.css';
import SecondSection from './components/secondsection/secondsection.component';
import ThirdSection from './components/thirdsection/thirdsection.component';
import FourthSection from './components/fourthsection/fourthsection.component';
import FifthSection from './components/fifthsection/fifthsection.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Footer />
    </div>
  );
}

export default App;
