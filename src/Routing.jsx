import { Routes, Route } from "react-router";

import Operation from "./pages/Operation";
import Fetch from "./pages/Fetch";
import Product from "./pages/Product";
import Review from "./pages/Review";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Review />} />
            <Route path="/operation" element={<Operation />} />
            <Route path="/fetch" element={<Fetch />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    )
}

export default Routing;