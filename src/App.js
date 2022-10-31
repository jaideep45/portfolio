import './assets/Inter-Black.ttf';
import './assets/Inter-Regular.ttf';
import './assets/Inter-Medium.ttf';
import './App.css';

import Home from './components/home';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import WithNavigate from './components/home';
import Theme from './components/theme_main'

function App(props) {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="theme/*" element={<Theme/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
