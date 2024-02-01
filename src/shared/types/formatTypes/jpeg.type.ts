export interface IJpegOptions {
  // 0 - 100 default = 20
  quality: number;
  progressive: boolean;
  chromaSubsampling: '4:2:0' | '4:4:4';
  //default = false
  mozjpeg: boolean;
  //default = false
  trellisQuantisation: boolean;
  //default = false
  overshootDeringing: boolean;
  //default = false
  optimiseScans: boolean;
  // 0 - 8default = 0
  quantisationTable: number;
}
