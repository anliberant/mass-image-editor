/* eslint-disable */
const sharp = require('sharp');
import fs from 'fs';

sharp.cache(false);

const isFileImage = (file: File): boolean => {
  const allowedFiles = ['image/gif', 'image/jpg', 'image/png', 'image/jpeg', 'svg'];
  return file && allowedFiles.includes(file['type']);
};

const processImage = async (
  imgPath: string,
  width: number,
  height: number,
  format: string,
  dest: string
): Promise<sharp.OutputInfo> => {
  console.log(imgPath, width, height, format, dest);

  try {
    return await sharp(imgPath)
      // .toFormat(format)
      // .quality(75)
      // .resize({
      //   width,
      //   height,
      // })
      // .toFormat(format, { mozjpeg: true })
      .toFile(dest);
  } catch (error) {
    console.log(error);
  }
};

export { processImage, isFileImage };
/* eslint-disable */
