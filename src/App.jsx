import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/layout.jsx";
import Home from "./components/pages/Home.jsx";
import ItemListContainer from "./components/items/ItemListContainer.jsx";
import Contacto from "./components/pages/contacto.jsx"
//import StyleAPP from "./App.css";
//import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App


// function App()  {
//   return (
//     <>
//       <Nav/>
//       <Header/> 
//         <Layout />
//       <Footer/>
//     </>
//   )
// }