import { app, shell, BrowserWindow, ipcMain } from 'electron';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';

import path, { join } from 'path';

import icon from '../../resources/icon.png?asset';
import { processImage } from '../utils/processImage';
import { ShortImageDto } from '../dtos/img.dto';

const isDev = process.env.NODE_ENV !== 'production';
// const isMac = process.platform === 'darwin';
let mainWindow: BrowserWindow;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 900,
    show: false,
    icon,
    // autoHideMenuBar: true,
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
async function optimizeAndResize({ imgPath, width, height, dest }: ShortImageDto): Promise<void> {
  console.log('imgPath', imgPath);
  console.log('width', width);
  console.log('height', height);
  console.log('dest', dest);
  try {
    const fileName = path.basename(imgPath);
    console.log('fileName', fileName);
    await processImage(imgPath, width, height, 'jpeg', dest + '\\').then((res) => {
      const file = { ...res, name: fileName, imgPath };
      console.log('file before sending', file);
      mainWindow.webContents.send('image:done', file);
    });
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
}

function resizeImage({ imgPath, dirName, width, height, dest }: ShortImageDto): void {
  optimizeAndResize({ imgPath, dirName, width, height, dest });
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron');

  electronApp.setAppUserModelId('com.electron');

  ipcMain.on('image:resize', (_, file: ShortImageDto) => {
    // console.log('path: ' + path);
    file.dest = path.join(file.dirName, 'imageresizer');
    // console.log('file imagePath: ' + file.imgPath);
    console.log('file dest: ' + file.dest);
    console.log('file imgPath: ' + file.imgPath);
    resizeImage(file);
    file.openDestFolder && shell.openPath(file.dest);
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
