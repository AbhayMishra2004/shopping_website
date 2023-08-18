import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Route, Routes } from "react-router-dom";

const App = () => {

  return (

    <div className="pb-10">
      <div className="bg-black">
        <Navbar />
      </div>


      <Routes>

        {/* PATH TO HOME */}
        <Route path="/" element={<Home />}></Route>

        {/* PATH OF CART */}
        <Route path="/cart" element={<Cart />}></Route>

      </Routes>
    </div>
  )
 
};

export default App;
