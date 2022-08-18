
import './App.css';
import Cards from './components/Cards';
import { useState } from 'react' 
import TheCarousel from './components/TheCarousel';
import SecondPage from './components/SecondPage';

function App() {


  return (
    <div className="Main">
    <TheCarousel />
    <SecondPage />
    </div>
    );
}

export default App;
