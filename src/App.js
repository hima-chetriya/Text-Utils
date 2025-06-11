// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>

<Navbar title="TextUtils2" aboutText=" About TextUtils"/>
{/* <Navbar/> */}
<div className='container my-3'>
<About/>
<TextForm heading="Enter the text to analyze"/>
</div>

   
    </>
   
  );
}

export default App;
