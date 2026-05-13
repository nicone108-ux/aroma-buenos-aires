import Header from "./components/layout/Header.jsx";
import Nav from "./components/layout/Nav.jsx";
import Footer from "./components/layout/Footer.jsx";
import Layout from "./components/layout/layout.jsx";
//import StyleAPP from "./App.css";
//import './App.css'

function App()  {
  return (
    <>
      <Nav/>
      <Header/> 
        <Layout />
      <Footer/>
    </>
  )
}
 
export default App