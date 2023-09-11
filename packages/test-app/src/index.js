import { registerTheme } from '@appmaker-xyz/core';
import { appmaker } from '@appmaker-xyz/core';
import { blocks } from './blocks';
import { pages } from './pages';
import { logData } from './functions/logData';

export function activate(params) {
  logData();
  console.log('test-app activated');
}
const TestApp = {
  id: 'test-app',
  activate,
  pages,
  blocks,
};
registerTheme(TestApp);
export default TestApp;
