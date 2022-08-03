import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './Shared/Header';
import Home from './Pages/Home/Home';
import Jainamaj from './Pages/Home/Products/Jainamaj';
import Tupi from './Pages/Home/Products/Tupi';
import Tasbih from './Pages/Home/Products/Tasbih';
import Attar from './Pages/Home/Products/Attar';
import Panjabi from './Pages/Home/Products/Panjabi';
import Borka from './Pages/Home/Products/Borka';
import QuranAndHadith from './Pages/Home/Products/QuranAndHadith';
import Products from './Pages/Home/Products/Products';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import SearchContainer from './Pages/Home/SearchContainer';

function App() {
  return (
    <div>     
        <hr />
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route index element={<Products></Products>}></Route>
            <Route path='QuranandHadith' element={<QuranAndHadith></QuranAndHadith>}></Route>
            <Route path='panjabi' element={<Panjabi></Panjabi>}></Route>
            <Route path='borka' element={<Borka></Borka>}></Route>
            <Route path='tupi' element={<Tupi></Tupi>}></Route>
            <Route path='jainamaj' element={<Jainamaj></Jainamaj>}></Route>
            <Route path='tasbih' element={<Tasbih></Tasbih>}></Route>
            <Route path='attar' element={<Attar></Attar>}></Route>
            <Route path='search' element={<SearchContainer></SearchContainer>}></Route>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
    </div>
  );
}

export default App;
