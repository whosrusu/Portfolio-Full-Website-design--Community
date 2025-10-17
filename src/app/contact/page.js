import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Hero title={"CONTACT ME"} subTitle={"SAY HELLO TO ME"} />
      <Contact />
      <Footer />
    </>
  );
}
