import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Jainamaj from "./Pages/Home/Products/Jainamaj";
import Tupi from "./Pages/Home/Products/Tupi";
import Tasbih from "./Pages/Home/Products/Tasbih";
import Attar from "./Pages/Home/Products/Attar";
import Panjabi from "./Pages/Home/Products/Panjabi";
import Borka from "./Pages/Home/Products/Borka";
import QuranAndHadith from "./Pages/Home/Products/QuranAndHadith";
import Products from "./Pages/Home/Products/Products";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import SearchContainer from "./Pages/Home/SearchContainer";
import BuyNow from "./Pages/BuyNow/BuyNow";
import RequireAuth from "./Pages/Login/RequireAuth";
import Cart from "./Pages/Cart/Cart";
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
  return (
    <div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/buynow/:productId"
          element={
            <RequireAuth>
              <BuyNow></BuyNow>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart></Cart>
            </RequireAuth>
          }
        ></Route>

        <Route path="userprofile" element={<UserProfile></UserProfile>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
