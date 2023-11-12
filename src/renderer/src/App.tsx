import { useCallback, useEffect, useState } from 'react';

import Header from './components/header/Header';
import Tabs from './components/tabs/Tabs';
import FilesTable from './components/filesTable/FilesTable';
import Controls from './components/controls/Controls';
import Options from './components/options/Options';
import FilesInfo from './components/filesInfo/FilesInfo';
import { ImageFileDto, StatusType } from '../../dtos/img.dto';
import { calcPercentage } from '../../utils/calcSize';

type TabStatusType = 'files' | 'options';

function App(): JSX.Element {
  const [images, setImages] = useState<ImageFileDto[]>([]);
  const [totalSize, setTotalSize] = useState(0);
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [optimizedSize, setOptimizedSize] = useState(0);
  const [tabStatus, setTabStatus] = useState<TabStatusType>('files');
  const [allOptimized, setAllOptimized] = useState(false);
  const [destPath, setDestPath] = useState('');

  const clearImagesList = (): void => setImages([]);

  console.log('Component launched');
  const getDoneImg = useCallback(() => {
    api.on('image:done', (event, res) => {
      // let newImageList: ImageFileDto[] = [];
      const name = res.name;
      const nameIdx = name.lastIndexOf('.');
      const fullName = name.substring(0, nameIdx);
      setImages((images) => {
        return images.map((image) => {
          if (image.file.name.includes(fullName)) {
            return {
              ...image,
              width: res.width,
              height: res.height,
              newSize: res.size,
              newFormat: res.format,
              status: StatusType.completed,
            };
          }
          return image;
        });
      });
    });
  }, [images]);

  const sendImagesList = (): void => {
    images.forEach((image, i) => {
      const imgPath = image.file.path;
      console.log('imgPath ma App.ts', imgPath);
      api.send('image:resize', {
        imgPath,
        dirName: image.dirName,
        width: 100,
        height: 100,
        openDestFolder: i === images.length - 1,
        status: image.status,
      });
    });
    //setAllOptimized(true);
  };

  const calcTotalSize = (): void => {
    let calculatedTotalSize = 0;
    images.forEach((image) => {
      calculatedTotalSize += image.file?.size;
    });
    setTotalSize(calculatedTotalSize);
  };
  const calcOptimizedSize = (): void => {
    let calculatedOptimizedSize = 0;
    images.forEach((image) => {
      calculatedOptimizedSize += image.newSize | 0;
    });
    setOptimizedSize(calculatedOptimizedSize);
  };
  const calcTotalPercentage = (): void => {
    if (!optimizedSize) {
      return;
    }
    const percent = calcPercentage(totalSize, optimizedSize);
    setTotalPercentage(percent);
  };

  useEffect(() => {
    if (!images.length) {
      setAllOptimized(false);
      return;
    }
    calcTotalSize();
    calcOptimizedSize();
    calcTotalPercentage();
  }, [images]);
  useEffect(() => {
    getDoneImg();
  }, []);

  return (
    <>
      <Header setImages={setImages} setDestPath={setDestPath} />
      <div className="px-10">
        <Tabs tabStatus={tabStatus} setTabStatus={setTabStatus} />
        {images.length > 0 && tabStatus === 'files' && <FilesTable images={images} />}
        {tabStatus === 'options' && <Options />}
        {images.length > 0 && tabStatus === 'files' && (
          <>
            <FilesInfo
              filesCount={images.length}
              totalSize={totalSize}
              optimizedSize={optimizedSize}
              reductionPercentage={totalPercentage}
            />
            <Controls
              clearImagesList={clearImagesList}
              sendImagesList={sendImagesList}
              allOptimized={allOptimized}
            />
          </>
        )}
      </div>
    </>
  );
}
export default App;
