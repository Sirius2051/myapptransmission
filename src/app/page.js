import About from "@/components/About";
import AboutTeam from "@/components/AboutTeam";
import Footer from "@/components/Footer";
import Model3d from "@/components/Model3d";

import NavBar from "@/components/NavBar";




export default function Home() {
  return (
    <div className="flex flex-col gap-20  w-full  bg-gradient-to-r from-slate-900  to-slate-700 via-gray-700
    background-animate">
      <NavBar/>
      <Model3d/>
      <About/>
      <AboutTeam/>
      <Footer/>
    </div>
  );
}
