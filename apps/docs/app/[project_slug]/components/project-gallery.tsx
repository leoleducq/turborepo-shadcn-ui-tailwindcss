import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const imageHeights = [450, 600, 520, 580, 400, 550, 480, 620, 500];

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-2 gap-0">
      {images.map((image, index) => {
        const height = imageHeights[index % imageHeights.length];

        return (
          <div key={index} className="break-inside-avoid mb-0 relative">
            <Image
              src={image}
              alt={`${title} - Image ${index + 1}`}
              width={400}
              height={height}
              className="object-cover w-full"
              style={{ height: `${height}px` }}
            />
          </div>
        );
      })}
    </div>
  );
}
