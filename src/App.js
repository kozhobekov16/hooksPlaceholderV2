import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About';
import Nav from './Nav';
import Datas from './Ingredients';
import Item from './Item'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/datas" exact element={<Datas/>}/>
          <Route path="/datas:id" element={<Item/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default App;
