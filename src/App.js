import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import HeaderSection from './components/HeaderSection/HeaderSection';
import About from './components/About/About';
import Service from './components/Service/Service';
import Skill from './components/Skill/Skill';
import Available from './components/Available/Available';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderSection></HeaderSection>
      <About></About>
      <Service></Service>
      <Available></Available>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
