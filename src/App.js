import './App.css';
import Homepage from './Sections/Homepage';
import Navbar from './Sections/Navbar';
import Sidebar from './Sections/Sidebar';

function App() {
  return (
    <div className="App">
    <Navbar/>

    <Sidebar/>
    <Homepage/>

     
    </div>
  );
}

export default App;
