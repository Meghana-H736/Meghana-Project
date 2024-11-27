import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';  

import Page from './pages/desktop1/Final';   
import Info from './Info';                    
import Page2 from './pages/screen2/Final2';   
import Page3 from './pages/screen3/Final';   

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Info />} /> 
        <Route path="/page1" element={<Page />} />  
        <Route path="/page2" element={<Page2 />} /> 
        <Route path="/page3" element={<Page3 />} /> 
        

      </Routes>
    </Router>
  );
}

export default App;
