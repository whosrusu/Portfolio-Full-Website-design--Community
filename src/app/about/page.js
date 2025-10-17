import Background from "@/components/about/Background";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import config from "@/data/config";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Hero title={"ABOUT ME"} subTitle={`it's a-me. ${config.title}`} />
      <Background />
      <Footer />
    </>
  );
}
