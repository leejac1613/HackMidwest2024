
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Food from "./Components/Food";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./Components/Card";
import Student from "./Components/Student";
import NavBar from "./Components/NavBar";
import SubmitUser from "./Components/SubmitUser";
function App() {
  return(
    <>
      <NavBar/>

      <Cards/>
      <SubmitUser/>
      <Footer/>
    </>
  );

}

export default App
