import { appmaker } from '@appmaker-xyz/core';
export function logData() {
  appmaker.addFilter(
    'inapp-page-data-response',
    `namespace`, // namespace
    (data, { pageId }) => {
      console.log(
        'pageId is :',
        pageId,
        '\n data is :',
        data,
        // .dataSource?.attributes.params,
      );
      return data;
    },
  );
}
