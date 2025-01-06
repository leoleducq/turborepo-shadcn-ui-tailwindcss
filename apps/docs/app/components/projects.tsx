"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects";

// Trier les projets par date du plus récent au moins récent
const sortedProjects = projects.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function Projects() {
  return (
    <section id="projets" className="container py-12">
      <h2 className="text-3xl font-bold mb-8">Mes Projets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {sortedProjects.map((project) => (
          <Link href={`/${project.slug}`} key={project.id}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Card className="cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-[600px] transition-transform duration-300 ease-in-out"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(project.date).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
