import { Route, Routes } from "react-router-dom";
import Layout from "App/layout/Layout";
import NotFound from "App/layout/NotFound";
import { useState } from "react";

function App() {
    const [keklol, lolkek] = useState();
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {/* <Route index element={<ComponentName />}></Route> */}
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Routes>
    );
}

export default App;