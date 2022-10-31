import './assets/Inter-Black.ttf';
import './assets/Inter-Regular.ttf';
import './assets/Inter-Medium.ttf';
import './App.css';

import Home from './components/home';
import TeMain from './components/te_main';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";



function App(props) {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="theme/*" element={<TeMain/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
