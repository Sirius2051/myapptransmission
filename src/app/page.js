import About from "@/components/About";
import AboutTeam from "@/components/AboutTeam";
import Footer from "@/components/Footer";
import Model3d from "@/components/Model3d";
// import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";




export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section className="aboutProject">
        <Model3d/>
        <About />
        <AboutTeam />

      </section>
      <Footer />
    </div>
  );
}
