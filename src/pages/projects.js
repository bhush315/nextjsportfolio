import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A web application built with Next.js and Tailwind CSS.",
      image: "/images/project1.jpg",
    },
    {
      title: "Project Two",
      description: "A mobile app using React Native and Firebase.",
      image: "/images/project2.jpg",
    },
    {
      title: "Project Three",
      description: "A portfolio website with custom styling and animations.",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <Layout>
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-blue-600">My Projects</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
