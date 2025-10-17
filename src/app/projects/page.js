import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsList from "@/components/projects/ProjectsList";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <Hero title={"MY PROJECTS"} subTitle={"MADE WITH LOVE"} />
      <ProjectsList />
      <Footer />
    </>
  );
}
