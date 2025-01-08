import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Brands from "./Pages/Brands";
import Collections from "./Pages/Collections";
import Sale from "./Pages/Collections/Sale";
import Mens from "./Pages/Collections/Mens";
import Womens from "./Pages/Collections/Womens";
import Shoes from "./Pages/Collections/Shoes";
import Accessories from "./Pages/Collections/Accesaries";
import Fragrances from "./Pages/Collections/Fragrances";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
