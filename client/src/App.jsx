import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Login,
  SignUp,
  Home,
  SubmitCertificate,
  Display,
  PageNotFound,
} from "./components/Pages";
import NavWrapper from "./components/Wrappers/NavWrapper";
import Detials from "./components/Pages/Detials";


function App() {
  return (
    <BrowserRouter>
      <div className="font-Montserrat w-[100%] h-full flex flex-col">
        <NavWrapper />
        <Routes className="flex-grow">
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="categories/:id" element={<SubmitCertificate />} />
          <Route path="display" element={<Display />} />
          <Route path="detials/:id" element={<Detials />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App