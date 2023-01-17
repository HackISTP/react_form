import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../pages/Form";
import Useform from "../pages/Useform";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Useform />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
