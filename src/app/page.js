import About from "@/components/About";
import AboutTeam from "@/components/AboutTeam";
import Footer from "@/components/Footer";
import Model3d from "@/components/Model3d";

import NavBar from "@/components/NavBar";




export default function Home() {
  return (
    <div>
      <NavBar/>
      <Model3d/>
      <About/>
      <AboutTeam/>
      <Footer/>
    </div>
  );
}
