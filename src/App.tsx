import React, {
  useEffect
} from 'react';

import {
  BackgroundLayerChooser,
  useMap
} from '@terrestris/react-geo';

import AddLayerModal from './components/AddLayerModal/index';
import BasicMapComponent from './components/BasicMapComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import ToolMenu from './components/ToolMenu';

import './App.less';

export interface AppProps extends React.ComponentProps<'div'> { };

export const App: React.FC<AppProps> = ({
  ...restProps
}): JSX.Element => {

  useEffect(() => {
    const loadingMask = document.querySelectorAll('.loadmask')[0];

    if (loadingMask) {
      loadingMask.classList.add('loadmask-hidden');
    }
  }, []);

  const map = useMap();

  return (
    <div
      className="App"
      {...restProps}
    >
      <Header />
      <BackgroundLayerChooser layers={map?.getLayers().getArray() as any} />
      <BasicMapComponent />
      <ToolMenu />
      <Footer />
      <AddLayerModal />
    </div>
  );
};

export default App;
