
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Page from "../src/Page"

function App() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <Page/>
      <Footer />
    </div>
  );
}

export default App;
