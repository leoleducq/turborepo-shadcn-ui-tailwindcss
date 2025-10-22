import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects";

const sortedProjects = [...projects].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const overlayText =
  "Comment transformer les traces oubliées du paratexte en signes vivants d’une édition contemporaine, où passé et présent s’entrelacent jusqu’à se confondre ?";

export default function Projects() {
  return (
    <section id="projets" className="w-full">
      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {sortedProjects.map((project, index) => {
          return (
            <Link
              href={`/${project.slug}`}
              key={project.id}
              className="group relative block aspect-square overflow-hidden bg-white"
              style={{ color: "rgb(255, 0, 0)" }}
            >
              <div className="absolute inset-0">
                {project.image.endsWith(".mp4") ||
                project.image.endsWith(".mov") ? (
                  <video
                    src={project.image}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    priority={index < 3}
                  />
                )}
              </div>
              <div className="absolute inset-0 flex h-full w-full items-center bg-white px-6 py-6 text-left text-base leading-tight opacity-0 transition-opacity duration-300 ease-in-out group-focus-visible:opacity-100 group-hover:opacity-100 md:text-lg">
                <p>{overlayText}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
