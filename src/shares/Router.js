import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../pages/Form";
import Siginup from "../pages/Signup";
import Useform from "../pages/Useform";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/use" element={<Useform />} />
        <Route path="/" element={<Siginup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
