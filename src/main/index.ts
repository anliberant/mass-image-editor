import { electronApp, is, optimizer } from '@electron-toolkit/utils';
import { BrowserWindow, Tray, app, ipcMain, nativeImage, shell } from 'electron';

import path, { join } from 'path';

import * as fs from 'fs';
import icon from '../../resources/icon.png?asset';
import { ExtendDto, ShortImageDto } from '../dtos/img.dto';
import { processImage } from '../utils/processImage';

const isDev = process.env.NODE_ENV !== 'production';
// const isMac = process.platform === 'darwin';
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
    isDev && mainWindow.webContents.openDevTools();
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
  // isExtend,
  // isLeftExtend,
  // isRightExtend,
  // isTopExtend,
  // isBottomExtend,
  leftExtend,
  rightExtend,
  topExtend,
  bottomExtend,
  extendColor,
}: ShortImageDto & ExtendDto): Promise<void> {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
  try {
    const fileName = path.basename(imgPath);
    await processImage(
      imgPath,
      width,
      height,
      'jpeg',
      dest + '\\' + fileName,
      fit,
      // isExtend,
      // isLeftExtend,
      // isRightExtend,
      // isTopExtend,
      // isBottomExtend,
      leftExtend,
      rightExtend,
      topExtend,
      bottomExtend,
      extendColor
    ).then((res) => {
      const file = { ...res, name: fileName, imgPath };
      mainWindow.webContents.send('image:done', file);
    });
  } catch (error) {
    throw new Error(error.message);
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron');

  const tray = new Tray(nativeImage.createFromPath(icon));
  tray.setToolTip('Mass Images Editor');
  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });

  ipcMain.on('image:resize', (_, file: ShortImageDto & ExtendDto) => {
    optimizeAndResize(file);
    isOpenFolderAfterProcess && file.openDestFolder && shell.openPath(file.dest);
  });
  ipcMain.on('isOpenFolder', (_, toggleBool: boolean) => {
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
