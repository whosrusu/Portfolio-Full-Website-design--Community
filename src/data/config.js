import Image from "next/image";

const size = 15;

const config = {
  title: "YOUR NAME",
  sub_title: "web - desgin",
  about:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  skills: [
    {
      name: "HTML",
      icon: (
        <Image
          src={"/skills/HTML5.svg"}
          width={size}
          height={size}
          alt="html"
        />
      ),
    },
    {
      name: "CSS",
      icon: (
        <Image src={"/skills/CSS3.svg"} width={size} height={size} alt="css" />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <Image
          src={"/skills/Javascript.svg"}
          width={size}
          height={size}
          alt="javascript"
        />
      ),
    },
    {
      name: "ReactJs",
      icon: (
        <Image
          src={"/skills/React.svg"}
          width={size}
          height={size}
          alt="react"
        />
      ),
    },
    {
      name: "NodeJs",
      icon: (
        <Image
          src={"/skills/Nodejs.svg"}
          width={size}
          height={size}
          alt="nodeJs"
        />
      ),
    },
    {
      name: "Figma",
      icon: (
        <Image
          src={"/skills/Figma.svg"}
          width={size}
          height={size}
          alt="figma"
        />
      ),
    },
    {
      name: "Chrome",
      icon: (
        <Image
          src={"/skills/Google Chrome.svg"}
          width={size}
          height={size}
          alt="chrome"
        />
      ),
    },
    {
      name: "VSCode",
      icon: (
        <Image
          src={"/skills/Visual Studio Code.svg"}
          width={size}
          height={size}
          alt="visual studio code"
        />
      ),
    },
    {
      name: "Git",
      icon: (
        <Image src={"/skills/Shape.svg"} width={size} height={size} alt="git" />
      ),
    },
    {
      name: "NPM",
      icon: (
        <Image src={"/skills/NPM.svg"} width={size} height={size} alt="npm" />
      ),
    },
  ],
  projects: [
    {
      name: "Project Title - Here comes the name of the Project",
      description: "Here are the Tech’s used",
      image_url: "prj.png",
    },
    {
      name: "Project Title - Here comes the name of the Project",
      description: "Here are the Tech’s used",
      image_url: "prj.png",
    },
    {
      name: "Project Title - Here comes the name of the Project",
      description: "Here are the Tech’s used",
      image_url: "prj.png",
    },
    {
      name: "Project Title - Here comes the name of the Project",
      description: "Here are the Tech’s used",
      image_url: "prj.png",
    },
    {
      name: "Project Title - Here comes the name of the Project",
      description: "Here are the Tech’s used",
      image_url: "prj.png",
    },
    {
      name: "Project Title - Here comes the name of the Project",
      description: "Here are the Tech’s used",
      image_url: "prj.png",
    },
  ],
  email: "your_email@gmail.com",
  number: "123 456 7890",

  links: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
  ],
};

export default config;
