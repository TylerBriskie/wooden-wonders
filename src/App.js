// App.js
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Components/Home";
import { GalleryPage } from "./Components/Gallery";
import { ContactPage } from "./Components/Contact";
import { AboutPage } from "./Components/About";
import './App.css';
import { Layout } from "./Components/Layout";

export function App() {
 return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
 );
}

export default App;
