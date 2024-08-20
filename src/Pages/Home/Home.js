import { Link, Outlet } from "react-router-dom";
import Footer2 from "../../Shared/Footer2";

import Header from "./../../Shared/Header";
import Navigation from "../../Shared/Navigation";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <Navigation />
     <div className="container mx-auto lg:h-screen mb-20">
     <Products />
     </div>
      <Footer2 />
    </div>
  );
};

export default Home;
