import { promises as fs } from 'fs';
import path from 'path';

export interface MediaItem {
  src: string;
  type: 'image' | 'video';
  name: string;
}

export async function getProjectMedia(projectId: number): Promise<MediaItem[]> {
  const publicDir = path.join(process.cwd(), 'public');
  const projectDir = path.join(publicDir, `projet${projectId}`);
  
  try {
    const files = await fs.readdir(projectDir);
    
    const mediaItems: MediaItem[] = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.mp4', '.mov'].includes(ext);
      })
      .map(file => {
        const ext = path.extname(file).toLowerCase();
        const isVideo = ['.mp4', '.mov'].includes(ext);
        
        return {
          src: `/projet${projectId}/${file}`,
          type: isVideo ? ('video' as const) : ('image' as const),
          name: file
        };
      })
      .sort((a, b) => {
        // Sort by filename number
        const getNumber = (filename: string) => {
          const match = filename.match(/^(\d+)/);
          return match ? parseInt(match[1] || '999') : 999;
        };
        return getNumber(a.name) - getNumber(b.name);
      });
    
    return mediaItems;
  } catch (error) {
    console.warn(`No media found for project ${projectId}:`, error);
    return [];
  }
}

