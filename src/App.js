
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Company from './pages/company'
import Developer from './pages/Developer';
import Products from './pages/products'
import Sharedlayout from './Sharedlayout';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element ={<Sharedlayout/>}>
         <Route   index element ={<Products/>}></Route>
         <Route path ='/developers' element ={<Developer/>}></Route>
         <Route path ='/company' element ={<Company/>}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
