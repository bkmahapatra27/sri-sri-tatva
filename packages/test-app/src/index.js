import { registerTheme } from '@appmaker-xyz/core';
import { appmaker } from '@appmaker-xyz/core';
import { blocks } from './blocks';

export function activate(params) {
  console.log('test-app activated');
}
const TestApp = {
  id: 'test-app',
  activate,
  blocks,
};
registerTheme(TestApp);
export default TestApp;
