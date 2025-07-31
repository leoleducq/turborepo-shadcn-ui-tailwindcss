import Image from "next/image";
import VideoPlayer from "./video-player";
import { getProjectMedia } from "../../lib/media-utils";

interface ProjectGalleryProps {
  projectId: number;
  title: string;
}


export default async function ProjectGallery({ projectId, title }: ProjectGalleryProps) {
  const mediaItems = await getProjectMedia(projectId);

  return (
    <div className="columns-1 gap-0">
      {mediaItems.map((media, index) => {
        return (
          <div key={index} className="break-inside-avoid mb-0 relative">
            {media.type === "video" ? (
              <VideoPlayer
                src={media.src}
                className="w-full"
              />
            ) : (
              <Image
                src={media.src}
                alt={`${title} - Image ${index + 1}`}
                width={400}
                height={600}
                className="w-full h-auto"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
