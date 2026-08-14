import { Routes, Route } from "react-router";

import Operation from "./pages/Operation";
import Pokemon from "./pages/Pokemon";
import Product from "./pages/Product";
import Review from "./pages/Review";
import FormControlled from "./pages/FormControlled";
import Detail from "./pages/Detail";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Review />} />
            <Route path="/operation" element={<Operation />} />
            <Route path="/pokemon">
                <Route index element={<Pokemon />}/>
                <Route path=":id/:slug" element={<Detail />} />
            </Route>
            <Route path="/product" element={<Product />} />
            <Route path="/controlled" element={<FormControlled />} />
        </Routes>
    )
}

export default Routing;