import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Book from './components/pages/Book';
import Add from './components/pages/Add';
import Edit from './components/pages/Edit';

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col items-center w-full">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/add" element={<Add />} />
            <Route path="/books/edit/:bookId" element={<Edit />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
