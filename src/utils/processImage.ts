/* eslint-disable */
const sharp = require('sharp');

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
  dest: string,
  fit: string,
  // isExtend: boolean,
  // isLeftExtend: boolean,
  // isRightExtend: boolean,
  // isTopExtend: boolean,
  // isBottomExtend: boolean,
  leftExtend: number,
  rightExtend: number,
  topExtend: number,
  bottomExtend: number,
  extendColor: string
): Promise<sharp.OutputInfo> => {
  try {
    let buffer = await sharp(imgPath)
      .resize(width, height, {
        fit: sharp.fit[fit],
        withoutEnlargement: true,
      })
      .extend({
        top: topExtend || 0,
        bottom: bottomExtend || 0,
        left: leftExtend || 0,
        right: rightExtend || 0,
        background: extendColor,
      })
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

export { isFileImage, processImage };
