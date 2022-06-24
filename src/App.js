import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './pages/page1/page1.js';
import Page2 from './pages/page2/page2.js';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
