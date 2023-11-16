/* eslint-disable */
const sharp = require('sharp');
import fs from 'fs';

sharp.cache(false);

/* eslint-disable */
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
  try {
    let buffer = await sharp(imgPath)
      // .resize(2000, 2000, {
      //   fit: sharp.fit.inside,
      //   withoutEnlargement: true,
      // })
      .toBuffer();
    return await sharp(buffer).toFile(dest);
    //return await sharp(imgPath)
    // .toFormat(format)
    // .quality(75)
    // .resize({
    //   width,
    //   height,
    // })
    // .toFormat(format, { mozjpeg: true })
    //.toFile(dest);
  } catch (error) {
    console.log(error);
  }
};

export { processImage, isFileImage };
