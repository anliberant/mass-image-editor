import { electronApp, is, optimizer } from '@electron-toolkit/utils';
import { BrowserWindow, Tray, app, ipcMain, nativeImage, shell } from 'electron';

import path, { join } from 'path';

import * as fs from 'fs';
import icon from '../../resources/icon.png?asset';
import { ImageWithOptions } from '../shared/dtos/img.dto';
import { IS_OPEN_FOLDER, PROCESS_IMAGE } from './../shared/constants/events.constants';
import { ChannelTypes } from './../shared/types/formats.type';
const sharp = require('sharp');
//const isMac = process.platform === 'darwin';
let mainWindow: BrowserWindow;
let isOpenFolderAfterProcess = true;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 900,
    show: false,
    icon,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    //mainWindow.webContents.openDevTools();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
}
async function optimizeAndResize({
  imgPath,
  width,
  height,
  dest,
  fit,
  isExtend,
  leftExtend,
  rightExtend,
  topExtend,
  bottomExtend,
  extendColor,
  isExtract,
  leftExtract,
  topExtract,
  widthExtract,
  heightExtract,
  isTrim,
  trimColor,
  rotate,
  rotateBg,
  isFlip,
  isFlop,
  isAffine,
  affineA,
  affineB,
  affineC,
  affineD,
  isMedian,
  medianSize,
  isBlur,
  blurSigma,
  isFlatten,
  flattenBg,
  isUnflatten,
  isGamma,
  gammaVal,
  gammaOut,
  isNegate,
  isNegateAlpha,
  isNormalize,
  normalizeLower,
  normalizeUpper,
  isClahe,
  claheWidth,
  claheHeight,
  claheMaxSlope,
  newWidth,
  newHeight,
  isConvolve,
  isThreshold,
  thresholdVal,
  isThresholdGreyscale,
  isThresholdGrayscale,
  isModulate,
  modulateBrightness,
  modulateSaturation,
  modulateHue,
  modulateLightness,
  isSharpen,
  isSharpenSigma,
  sharpenSigma,
  isSharpenM1,
  sharpenM1,
  isSharpenM2,
  sharpenM2,
  isSharpenX1,
  sharpenX1,
  isSharpenY2,
  sharpenY2,
  isSharpenY3,
  sharpenY3,
  isTint,
  tintColor,
  isGreyscale,
  isColourSpace,
  colourSpace,
  isRemoveAlpha,
  isEnsureAlpha,
  ensureAlphaVal,
  extractChannel,
  isCreatePrefix,
  prefix,
  isCreateSuffix,
  suffix,
}: ImageWithOptions): Promise<void> {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
  const affineArray = [
    [affineA, affineB],
    [affineC, affineD],
  ];
  const resize = newWidth !== width || newHeight !== height;
  const fileName = path.basename(imgPath);

  let newFileName = fileName;
  if (isCreatePrefix) {
    newFileName = prefix + newFileName;
  }
  if (isCreateSuffix) {
    newFileName = newFileName.replace('.', suffix + '.');
  }
  const destination = dest + '\\' + newFileName;

  let readableStream = fs.createReadStream(imgPath);
  //const writeableStream = fs.createWriteStream(dest);

  const rotatePipeline = sharp().rotate(rotate, {
    background: rotateBg,
  });
  const extendPipeline = sharp().extend({
    top: topExtend || 0,
    bottom: bottomExtend || 0,
    left: leftExtend || 0,
    right: rightExtend || 0,
    background: extendColor,
  });
  const trimPipeline = sharp().trim({
    background: trimColor,
    threshold: 0,
    lineArt: true,
  });
  const resizedPipeline = sharp().resize(newWidth || width, newHeight || height, {
    fit: sharp.fit[fit],
    withoutEnlargement: true,
  });
  const flipPipeline = sharp().flip(isFlip);
  const flopPipeline = sharp().flop(isFlop);
  const affinePipeline = sharp().affine(affineArray, {
    background: 'white',
    interpolator: sharp.interpolators.nohalo,
  });
  const extractPipeline = sharp().extract({
    left: leftExtract || 0,
    top: topExtract || 0,
    width: widthExtract || 0,
    height: heightExtract || 0,
  });
  const medianPipeline = sharp().median(medianSize);
  const convolvePipeline = sharp().convolve({
    width: 3,
    height: 3,
    kernel: [-1, 0, 1, -2, 0, 2, -1, 0, 1],
    scale: 1,
  });
  const blurPipeline = sharp().blur();
  const blurWithSigmaPipeline = sharp().blur(blurSigma);
  const flattenPipeline = sharp().flatten({ background: flattenBg });
  const unFlattenPipeline = sharp().unflatten();
  const gammaPipeline = sharp().gamma(gammaVal, gammaOut);
  const negatePipeline = sharp().negate({ alpha: isNegateAlpha });
  const normalizePipeline = sharp().normalize({ lower: normalizeLower, upper: normalizeUpper });
  const thresholdPipeline = sharp().threshold(thresholdVal, {
    greyscale: isThresholdGreyscale,
    grayscale: isThresholdGrayscale,
  });
  const modulatePipeline = sharp().modulate({
    brightness: modulateBrightness,
    saturation: modulateSaturation,
    lightness: modulateLightness,
    hue: modulateHue,
  });
  const tintPipeline = sharp().tint(tintColor);
  const greyscalePipeline = sharp().greyscale();
  const colourSpacePipeline = sharp().toColourspace(colourSpace.toLowerCase());
  const ensureAlphaPipeline = sharp().ensureAlpha(ensureAlphaVal);
  const removeAlphaPipeline = sharp().removeAlpha();

  const writePipeline = sharp({ failOnError: false }).toFile(destination, (err, info) => {
    const file = { ...info, name: fileName, imgPath };
    mainWindow.webContents.send('image:done', file);
  });

  if (rotate) {
    readableStream = readableStream.pipe(rotatePipeline);
  }
  if (resize) {
    readableStream = readableStream.pipe(resizedPipeline);
  }
  if (isTrim) {
    readableStream = readableStream.pipe(trimPipeline);
  }
  if (isExtend) {
    readableStream = readableStream.pipe(extendPipeline);
  }
  if (isExtract) {
    readableStream = readableStream.pipe(extractPipeline);
  }
  if (isFlip) {
    readableStream = readableStream.pipe(flipPipeline);
  }
  if (isFlop) {
    readableStream = readableStream.pipe(flopPipeline);
  }
  if (isAffine) {
    readableStream = readableStream.pipe(affinePipeline);
  }
  if (isMedian) {
    readableStream = readableStream.pipe(medianPipeline);
  }
  if (isConvolve) {
    readableStream = readableStream.pipe(convolvePipeline);
  }
  if (isBlur) {
    if (blurSigma !== 0.3) {
      readableStream = readableStream.pipe(blurWithSigmaPipeline);
    } else {
      readableStream = readableStream.pipe(blurPipeline);
    }
  }
  if (isFlatten) {
    readableStream = readableStream.pipe(flattenPipeline);
  }
  if (isUnflatten) {
    readableStream = readableStream.pipe(unFlattenPipeline);
  }
  if (isGamma) {
    readableStream = readableStream.pipe(gammaPipeline);
  }
  if (isNegate) {
    readableStream = readableStream.pipe(negatePipeline);
  }
  if (isNormalize) {
    readableStream = readableStream.pipe(normalizePipeline);
  }
  if (isClahe && claheWidth && claheHeight) {
    readableStream = readableStream.pipe(
      sharp().clahe({
        width: claheWidth,
        height: claheHeight,
        maxSlape: claheMaxSlope,
      })
    );
  }
  if (isThreshold) {
    readableStream = readableStream.pipe(thresholdPipeline);
  }
  if (isModulate) {
    readableStream = readableStream.pipe(modulatePipeline);
  }
  if (isSharpen) {
    let sharpenOptions = { ...sharpenOptionsClone, sigma: sharpenSigma };
    let sharpenOptionsClone = { ...sharpenOptions };
    if (isSharpenM1) {
      sharpenOptions = { ...sharpenOptionsClone, m1: sharpenM1 };
      sharpenOptionsClone = { ...sharpenOptions };
    }
    if (isSharpenM2) {
      sharpenOptions = { ...sharpenOptionsClone, m2: sharpenM2 };
      sharpenOptionsClone = { ...sharpenOptions };
    }
    if (isSharpenX1) {
      sharpenOptions = { ...sharpenOptionsClone, x1: sharpenX1 };
      sharpenOptionsClone = { ...sharpenOptions };
    }
    if (isSharpenY2) {
      sharpenOptions = { ...sharpenOptionsClone, y2: sharpenY2 };
      sharpenOptionsClone = { ...sharpenOptions };
    }
    if (isSharpenY3) {
      sharpenOptions = { ...sharpenOptionsClone, y3: sharpenY3 };
    }

    readableStream = readableStream.pipe(sharp().sharpen(sharpenOptions));
  }
  if (isTint) {
    readableStream = readableStream.pipe(tintPipeline);
  }
  if (isGreyscale) {
    readableStream = readableStream.pipe(greyscalePipeline);
  }
  if (isColourSpace) {
    readableStream = readableStream.pipe(colourSpacePipeline);
  }
  if (isRemoveAlpha) {
    readableStream = readableStream.pipe(removeAlphaPipeline);
  }
  if (isEnsureAlpha) {
    readableStream = readableStream.pipe(ensureAlphaPipeline);
  }
  if (extractChannel !== ChannelTypes.NONE) {
    readableStream = readableStream.pipe(sharp().extractChannel(extractChannel.toLowerCase()));
  }

  readableStream.pipe(writePipeline);
  // try {
  //   const fileName = path.basename(imgPath);
  //   await processImage(
  //     imgPath,
  //     width,
  //     height,
  //     'jpeg',
  //     dest + '\\' + fileName,
  //     fit,
  //     isExtend,
  //     leftExtend,
  //     rightExtend,
  //     topExtend,
  //     bottomExtend,
  //     extendColor,
  //     isExtract,
  //     leftExtract,
  //     topExtract,
  //     widthExtract,
  //     heightExtract,
  //     isTrim,
  //     trimColor,
  //     rotate,
  //     rotateBg,
  //     isFlip,
  //     isFlop,
  //     isAffine,
  //     affineA,
  //     affineB,
  //     affineC,
  //     affineD,
  //     isMedian,
  //     medianSize,
  //     isBlur,
  //     blurSigma,
  //     isFlatten,
  //     flattenBg,
  //     isUnflatten,
  //     isGamma,
  //     gammaOut,
  //     isNegate,
  //     negateAlpha,
  //     isNormalize,
  //     normalizeLower,
  //     normalizeUpper,
  //     isClahe,
  //     claheWidth,
  //     claheHeight,
  //     claheMaxSlope,
  //     newWidth,
  //     newHeight,
  //     isConvolve,
  //     isThreshold,
  //     thresholdVal,
  //     thresholdGreyscale,
  //     thresholdGrayscale,
  //     isModulate,
  //     modulateBrightness,
  //     modulateSaturation,
  //     modulateHue,
  //     modulateLightness
  //   ).then((res) => {
  //     console.log('res: ' + JSON.stringify(res));
  //     const file = { ...res, name: fileName, imgPath };
  //     mainWindow.webContents.send('image:done', file);
  //   });
  // } catch (error) {
  //   throw new Error(error.message);
  // }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron');

  const tray = new Tray(nativeImage.createFromPath(icon));
  tray.setToolTip('Mass Images Editor');
  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });

  ipcMain.on(PROCESS_IMAGE, (_, file: ImageWithOptions) => {
    optimizeAndResize(file);
    isOpenFolderAfterProcess && file.openDestFolder && shell.openPath(file.dest);
  });
  ipcMain.on(IS_OPEN_FOLDER, (_, toggleBool: boolean) => {
    isOpenFolderAfterProcess = toggleBool;
  });

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
