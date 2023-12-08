import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Main from './components/Main';
import Footer from './components/Footer';
import Portrait from './components/Portrait';

function App() {
  return (
    <div className="App">
      <Header primary={true}/>
      <div className="Body">
        <SideNav />
        <div style={{flexGrow: 1.3}} />
        <Main />
        <div style={{flexGrow: 3}} />
      </div>
      <Portrait 
        img = 'logo192.png'
        width = '15%'
        textWidth = '80%'
        text = 'Hello World!'
      />
      <Footer />
    </div>
  );
}

export default App;
