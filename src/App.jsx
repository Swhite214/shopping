import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ForeignPage from './pages/ForeignPage';
import DomesticPage from './pages/DomesticPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/foreign" element={<ForeignPage />} />
        <Route path="/domestic" element={<DomesticPage />} />
      </Routes>
    </Router>
  );
}

export default App;

