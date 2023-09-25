import { ToolBarIcons as ICONS } from '@appmaker-xyz/shopify';
const pagesData = {
  title: 'Product list',
  attributes: {
    insideSafeAreaView: true,
    rootContainerStyle: {
      flex: 1,
    },
    contentContainerStyle: {
      flex: 1,
      backgroundColor: 'white',
    },
  },
  blocks: [
    {
      name: 'appmaker/banner',
      attributes: {
        __display:
          '{{checkIfTrueFalse(plugins.shopify.settings.show_collection_banner)}}',
        image: '{{ {url:blockItem.collection.image.url} }}',
        uri: '{{blockItem.collection.image.url}}',
        thumbnail_meta: '{{blockItem.collection.image}}',
        viewSingle: true,
      },
    },
    {
      name: 'appmaker/page-head',
      attributes: {
        title: '{{blockItem.collection.title}}',
        layoutSelector: false, //TODO: Layout selector should be fixed
        viewSingle: true,
      },
    },
    {
      attributes: {},
      name: 'appmaker/shopify-product-list',
      innerBlocks: [],
      clientId: 'product-list',
      isValid: true,
    },
  ],
  pageTypes: [
    {
      type: 'empty',
      pageSource: 'pageId',
      pageId: 'CustomTemplate',
      condition: true,
      // '{{ blockData.collection.appmaker_collection_template.value !== "a" }}',
    },
  ],

  _id: 'productList',
  uid: 'odRhv94hf4S52SysvvNoxPyRx682',
  // dataSource: ,
  toolBarItems: [ICONS.SEARCH, ICONS.WISHLIST, ICONS.CART],
};
export default pagesData;
