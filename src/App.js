import { Route, Routes } from "react-router-dom";

import NavBar from "./Stranice/NavigationBar/Navbar";
import Home from "./Stranice/Home/home";
import Shop from "./Stranice/Shop/shop";
import Auth from "./Stranice/Authentication/auth";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
