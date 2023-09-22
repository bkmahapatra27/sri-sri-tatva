const CustomCartpage = {
  title: 'Cart',
  blocks: [
    { name: 'sri-sri-tatva/header-notice' },
    {
      name: 'shopify/cart-line-items',
    },
    {
      name: 'sri-sri-tatva/couponApply',
    },
    {
      name: 'sri-sri-tatva/cart-summary-table',
    },
  ],
  attributes: {
    contentContainerStyle: { flex: 1, backgroundColor: '#ffffff' },
    insideSafeAreaView: true,
    loadingLayout: 'product',
    reloadOnFocus: true,
    rootContainerStyle: { flex: 1, backgroundColor: '#ffffff' },
    showLoadingTillData: true,
  },
  pageTypes: [
    {
      condition:
        '{{ lodash.isEmpty(blockData) || blockData.lineItems.edges.length == 0 }}',
      pageSource: 'pageVariants',
      type: 'empty',
    },
  ],
  //   pageVariants: { empty: { blocks: [Array] }, error: { blocks: [Array] } },
  stickyFooter: {
    blocks: [
      {
        name: 'sri-sri-tatva/cart-footer-checkout',
      },
    ],
  },
};

export default CustomCartpage;
