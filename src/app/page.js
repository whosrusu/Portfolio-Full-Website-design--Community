import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import config from "@/data/config";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero title={config.title} subTitle={config.sub_title} />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
