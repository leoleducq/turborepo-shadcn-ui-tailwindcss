"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects";
import VideoPlayer from "../[project_slug]/components/video-player";

// Trier les projets par date du plus récent au moins récent
const sortedProjects = projects.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Hauteurs variées pour créer un effet décalé
const imageHeights = [500, 650, 580, 620, 480, 600, 550, 630, 570];

export default function Projects() {
  return (
    <section id="projets">
      <div className="columns-1 sm:columns-2 lg:columns-2 gap-0">
        {sortedProjects.map((project, index) => {
          const height = imageHeights[index % imageHeights.length];
          const formattedDate = new Date(project.date).toLocaleDateString(
            "fr-FR",
            {
              year: "numeric",
              month: "long",
            }
          );

          return (
            <Link href={`/${project.slug}`} key={project.id}>
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="group break-inside-avoid mb-0 relative"
              >
                <Card className="cursor-pointer overflow-hidden rounded-none border-none">
                  <CardContent className="p-0 relative overflow-hidden">
                    {project.image.endsWith('.mp4') || project.image.endsWith('.mov') ? (
                      <VideoPlayer
                        src={project.image}
                        className="w-full transition-transform duration-300 ease-in-out"
                        style={{ height: `${height}px` }}
                        preview={true}
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={height}
                        className="object-cover w-full transition-transform duration-300 ease-in-out"
                        style={{ height: `${height}px` }}
                      />
                    )}

                    {/* Overlay avec animation depuis le bas */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-l-2 border-r-2 border-black p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <h3 className="text-lg font-semibold text-black mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600">{formattedDate}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
