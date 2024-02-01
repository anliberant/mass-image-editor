import { ImageDto, StatusType } from '../dtos/img.dto';

export async function getImageInfo(file: File): Promise<Partial<ImageDto>> {
  const image = new Image();
  image.src = URL.createObjectURL(file);
  return new Promise<Partial<ImageDto>>((resolve) => {
    image.onload = function (): void {
      let format = file.type.substring(6, file.type.length);
      if (format === 'jpg') {
        format = 'jpeg';
      }
      const newImage: Partial<ImageDto> = {
        name: file.name.substring(0, file.name.lastIndexOf('.')),
        originName: file.name,
        format,
        status: StatusType.notProcessed,
        dirName: api.dirName(file.path),
        width: this.width,
        height: this.height,
        size: file.size,
        newSize: 0,
        src: image.src,
        path: file.path,
        openDestFolder: false,
        fit: 'inside',
        isTrim: false,
        trimColor: '#ffffff',
      };
      resolve(newImage);
    };
  });
}
