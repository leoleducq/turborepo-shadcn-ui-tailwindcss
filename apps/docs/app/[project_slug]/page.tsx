import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";
import { projects } from "../projects";

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
    <div className="container py-12 mx-auto">
      <Button asChild className="mb-6">
        <Link href="/">Retour aux projets</Link>
      </Button>
      <article className="max-w-3xl mx-auto">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="w-full size-full object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <h2 className="text-muted-foreground mb-4">{project.subtitle}</h2>
        <p className="text-muted-foreground mb-4">
          {new Date(project.date).toLocaleDateString()}
        </p>
        <p className="text-lg leading-relaxed">{project.description}</p>
      </article>
    </div>
  );
}
