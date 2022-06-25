import { BrowserRouter, Routes, Route } from "react-router-dom";

import Api from "./components/Api";
import ErrorPage from "./components/ErrorPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/api" element={<Api />} />
        <Route path="/index" element={<Api />} />
        <Route path="/" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
