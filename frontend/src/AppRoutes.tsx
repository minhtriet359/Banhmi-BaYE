import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

const AppRoutes = () =>{
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage/></Layout>}/>
      <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}/>
      <Route path="/gallery" element={<Layout><GalleryPage/></Layout>}/>
      <Route path="/contact" element={<Layout><ContactPage/></Layout>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>)
}

export default AppRoutes;