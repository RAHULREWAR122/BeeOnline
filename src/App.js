import Footer from "./Components/Footer/Footer";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/Navbar/navbar";
import OurCourse from "./Pages/Courses/Cource";
import Packages from "./Pages/Packages/Packages";
import Team from "./Pages/team/Team";

function App() {
  return (
    <>
      <Navbar/> 
      <Hero/>
      <div className="pages">
          <Packages/>
          <Team/>
           <OurCourse/>
      </div>  
    <Footer/>
    </>
  );
}

export default App;
