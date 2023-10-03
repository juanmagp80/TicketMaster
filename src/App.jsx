import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import Events from './components/Events';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
const handleNavbarSearch = (term) => {
  setSearchTerm(term);
};
console.log(searchTerm);
  return (
    <>
      <Navbar onSearch={handleNavbarSearch}/> 
      <Events searchTerm={searchTerm}/>
     </>   
  )
}

export default App
