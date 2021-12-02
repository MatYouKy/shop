import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { RouteComponents } from './routes/RouteComponents';
import { Header } from './components/Header/Header';
import './App.scss';

export const App = () => (
  <Router basename={process.env.PUBLIC_URL}>    
    <Header />
    <Routes>
      {RouteComponents}
    </Routes>
  </Router>  
);
