import React from 'react';
import { registerTheme } from '@appmaker-xyz/core';
import { appmaker } from '@appmaker-xyz/core';
import { blocks } from './blocks';
import { pages } from './pages';
import { logData } from './functions/logData';
import HeaderPin from './components/HeaderPin';
import { images } from './files/index';
import { getPageId } from './functions/getPageId';

export function activate(params) {
  // logData();
  getPageId();
  console.log('-------------------------------');
  console.log('test-app activated');

  appmaker.toolBarIcons.registerToolBarIconForPage('DrawerMenu', {
    icons: [
      {
        name: 'appmaker/toolbar-icon',
        attributes: {
          __display: true,
          localImage: images.profile,
          appmakerAction: {
            action: 'OPEN_INAPP_PAGE',
            pageId: 'LoginPage',
          },
        },
      },
    ],
  });

  // Add filter to the `app-toolbar-right-extra-components`
  appmaker.addFilter(
    'app-toolbar-right-extra-components',
    'theme-id',
    (defaultComponents, { handleAction }) => {
      return [
        ...defaultComponents,
        // Add your component here
        <HeaderPin key="map-pin" handleAction={handleAction} />,
      ];
    },
  );
}
const TestApp = {
  id: 'test-app',
  activate,
  pages,
  blocks,
};
registerTheme(TestApp);
export default TestApp;
