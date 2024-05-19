import { Route, Routes } from "react-router-dom";
import Layout from "App/layout/Layout";
import NotFound from "App/layout/NotFound";
import Main from "Pages/Main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
