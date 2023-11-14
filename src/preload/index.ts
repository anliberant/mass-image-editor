import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import os from 'os';
import { join, dirname } from 'path';
import * as fs from 'fs';
import { ImageFileDto, ImgNotifyDto } from '../dtos/img.dto';

const api = {
  homedir: (): string => os.homedir(),
  dirName: (path: string): string => dirname(path),
  isDirectory: (path: string): boolean => fs.lstatSync(path).isDirectory(),
  join: (...args): string => join(...args),
  existsS: (path: string): boolean => fs.existsSync(path),
  mkdirS: (path: string): void => fs.mkdirSync(path),
  send: (channel: string, data: ImageFileDto | ImgNotifyDto): void =>
    ipcRenderer.send(channel, data),
  toggle: (channel: string, bool: boolean): void => ipcRenderer.send(channel, bool),
  readdirS: async (path: string): Promise<fs.Dirent[]> =>
    await fs.readdirSync(path, { encoding: 'utf-8', withFileTypes: true }),
  readFileS: async (path: string): Promise<Buffer> => await fs.readFileSync(path),
  on: (channel: string, callback: (...args) => void): unknown =>
    ipcRenderer.on(channel, (event, ...args) => callback(event, ...args)),
  once: (channel: string, callback: (...args) => void): unknown =>
    ipcRenderer.once(channel, (event, ...args) => callback(event, ...args)),
};

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
