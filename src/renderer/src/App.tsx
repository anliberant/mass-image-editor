import { useCallback, useEffect, useState } from 'react';

import { StatusType, TabStatusType } from '../../shared/dtos/img.dto';
import Header from './components/header/Header';
import Tabs from './components/tabs/Tabs';
import Controls from './features/images/controls/Controls';
import FilesInfo from './features/images/filesInfo/FilesInfo';
import FilesTable from './features/images/filesTable/FilesTable';
import Options from './features/options/Options';
import { useAppDispatch, useAppSelector } from './hooks';

import { ImagesState, updateImage } from '@renderer/features/images/store/imagesSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { images, totalSize, optimizedSize, totalPercentage, destPath } =
    useAppSelector<ImagesState>((state) => state.images);
  const [isUpdated, setIsUpdated] = useState(false);
  const [tabStatus, setTabStatus] = useState<TabStatusType>('files');

  const getDoneImg = useCallback((): void => {
    api.on('image:done', (event, res) => {
      const name = res.name;
      const nameIdx = name.lastIndexOf('.');
      const fullName = name.substring(0, nameIdx);

      images.map((image) => {
        if (image.originName.substring(0, image.originName.lastIndexOf('.')) === fullName) {
          const name = image.originName;
          const data = {
            newWidth: res.width,
            newHeight: res.height,
            newSize: res.size,
            format: res.format,
            status: StatusType.completed,
          };
          dispatch(updateImage(name, data));
        }
      });
    });
  });

  useEffect(() => {
    getDoneImg();
  }, [isUpdated]);

  return (
    <>
      <Header />
      <div className="px-10 min-h-[40vh]">
        {destPath && (
          <>
            <span>Destination:</span>
            <span className="pl-4  text-xs ml-auto mr-auto">{destPath}</span>
          </>
        )}
        <Tabs tabStatus={tabStatus} setTabStatus={setTabStatus} />
        {images.length > 0 && tabStatus === 'files' && <FilesTable />}
        {tabStatus === 'options' && <Options />}
        {images.length > 0 && tabStatus === 'files' && (
          <>
            <FilesInfo
              filesCount={images.length}
              totalSize={totalSize}
              optimizedSize={optimizedSize}
              reductionPercentage={totalPercentage}
            />
            <Controls setIsUpdated={setIsUpdated} />
          </>
        )}
      </div>
    </>
  );
}
export default App;
