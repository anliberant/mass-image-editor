import { ImageFileDto, StatusType } from '../dtos/img.dto';

export function getImageInfo(file: File): Partial<ImageFileDto> {
  const image = new Image();
  image.src = URL.createObjectURL(file);
  const newImage: Partial<ImageFileDto> = {
    file,
    name: file.name.substring(0, file.name.lastIndexOf('.')),
    format: file.type.substring(6, file.type.length),
    status: StatusType.notProcessed,
    dirName: api.dirName(file.path),
    image,
    openDestFolder: false,
  };
  return newImage;
}
