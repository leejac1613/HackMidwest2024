
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./Card";
import Student from "./Student";

function App() {
  return(
    <>
      <Header/>
      <Food/>
      <Student name="Jacob" age = {24} isStudent = {false}/>
      <Student/>
      <Cards/>
      <Footer/>
    </>
  );

}

export default App
