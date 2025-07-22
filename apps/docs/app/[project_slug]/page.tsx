import { notFound } from "next/navigation";
import { projects } from "../projects";
import ProjectHeader from "./components/project-header";
import ProjectGallery from "./components/project-gallery";

interface PageProps {
  params: Promise<{
    project_slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { project_slug } = await params;
  const project = projects.find((p) => p.slug === project_slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec tableau collé au header principal */}
      <ProjectHeader 
        tableData={project.tableData} 
      />
      
      {/* Galerie d'images désordonnée */}
      <ProjectGallery 
        images={project.images} 
        title={project.title} 
      />
    </div>
  );
}
