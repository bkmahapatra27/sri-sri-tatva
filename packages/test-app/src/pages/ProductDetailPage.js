const ProductDetailPage = {
  title: '',
  blocks: [
    {
      attributes: '[Object]',
      clientId: 'de9b066c-ae0d-4f7c-a3dd-123',
      name: 'appmaker/shopify-variation-listner',
    },
    { attributes: '[Object]', name: 'appmaker/shopify-product-image' },
    {
      attributes: '[Object]',
      clientId: 'product-data',
      name: 'appmaker/shopify-product-data',
    },
    { clientId: 'slot-after-product-data', name: 'appmaker/slot' },
    { clientId: 'slot-before-product-counter', name: 'appmaker/slot' },
    { attributes: '[Object]', name: 'appmaker/product-counter' },
    {
      attributes: '[Object]',
      clientId: 'slot-before-variation',
      name: 'appmaker/slot',
    },
    { attributes: '[Object]', name: 'appmaker/shopify-product-variation' },
    {
      attributes: '[Object]',
      clientId: 'slot-before-description',
      name: 'appmaker/slot',
    },
    {
      attributes: '[Object]',
      name: 'appmaker/shopify-product-description',
    },
    {
      attributes: '[Object]',
      clientId: 'slot-block-after-description',
      name: 'appmaker/slot-block',
    },
    {
      attributes: '[Object]',
      clientId: 'slot-after-description',
      name: 'appmaker/slot',
    },
    {
      attributes: '[Object]',
      clientId: 'widget-description',
      name: 'appmaker/shopify-related-product-scroller',
    },
  ],
  attributes: {
    contentContainerStyle: { flex: 1 },
    insideSafeAreaView: true,
    loadingLayout: 'product',
    rootContainerStyle: { flex: 1 },
  },
  dataSource: {
    attributes: {
      mapping: '[Object]',
      methodName: 'product',
      params: '[Object]',
    },
    repeatItem: 'DataSource',
    repeatable: 'Yes',
    runByDefault: false,
    source: 'shopify',
  },
  metaDataSource: {
    savedItem: { attributes: '[Object]', source: 'savedProducts' },
  },
  pageTypes: [
    {
      condition:
        '{{ lodash.isEmpty(blockData) || lodash.isEmpty(blockData.node) }}',
      pageSource: 'pageVariants',
      type: 'empty',
    },
  ],
  pageVariants: {
    empty: { blocks: '[Array]' },
    error: { blocks: '[Array]' },
  },
  stickyFooter: { blocks: ['[Object]'] },

  toolBarItems: [
    {
      attributes: '[Object]',
      clientId: 'toolbar-icon-search',
      name: 'appmaker/toolbar-icon',
    },
    {
      attributes: '[Object]',
      clientId: 'toolbar-icon-wishlist',
      name: 'appmaker/toolbar-icon',
    },
    {
      attributes: '[Object]',
      clientId: 'toolbar-icon-cart',
      dependencies: '[Object]',
      name: 'appmaker/toolbar-icon',
    },
  ],
};
