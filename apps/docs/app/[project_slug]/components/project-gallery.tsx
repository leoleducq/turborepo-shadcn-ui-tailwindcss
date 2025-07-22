import Image from "next/image";
import VideoPlayer from "./video-player";
import { getProjectMedia } from "../../lib/media-utils";

interface ProjectGalleryProps {
  projectId: number;
  title: string;
}

const mediaHeights = [450, 600, 520, 580, 400, 550, 480, 620, 500];

export default async function ProjectGallery({ projectId, title }: ProjectGalleryProps) {
  const mediaItems = await getProjectMedia(projectId);

  return (
    <div className="columns-1 sm:columns-2 lg:columns-2 gap-0">
      {mediaItems.map((media, index) => {
        const height = mediaHeights[index % mediaHeights.length];

        return (
          <div key={index} className="break-inside-avoid mb-0 relative">
            {media.type === "video" ? (
              <VideoPlayer
                src={media.src}
                className="w-full"
                style={{ height: `${height}px` }}
              />
            ) : (
              <Image
                src={media.src}
                alt={`${title} - Image ${index + 1}`}
                width={400}
                height={height}
                className="object-cover w-full"
                style={{ height: `${height}px` }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
