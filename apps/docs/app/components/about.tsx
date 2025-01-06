"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <section id="à-propos" className="container py-12">
      <h2 className="text-3xl font-bold mb-12 text-center">À Propos de Moi</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Mon Parcours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Passionné(e) par la communication visuelle depuis mon plus jeune
                âge, j'ai développé mes compétences à travers une formation
                rigoureuse et des expériences variées dans le domaine.
              </p>
              <p className="mb-4">
                Mon approche créative allie esthétique et fonctionnalité pour
                créer des designs qui captivent et communiquent efficacement. Je
                m'efforce constamment d'innover et de repousser les limites de
                la communication visuelle.
              </p>
              <p>
                Que ce soit pour des projets d'identité de marque, de design
                d'interface ou de campagnes publicitaires, je m'engage à fournir
                des solutions visuelles qui dépassent les attentes de mes
                clients.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
