import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Certifications from "./pages/Certifications";
import Hobbies from "./pages/Hobbies";
import Footer from "./pages/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Project />
        <Certifications />
        <Hobbies />
      </main>
      <Footer />
    </>
  );
}
