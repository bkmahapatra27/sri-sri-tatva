const ProductListPage = {
  title: 'ProductListPage',
  blocks: [
    {
      name: 'appmaker/shopify-product-list', // custom block name
    },
  ],
  attributes: {
    insideSafeAreaView: true,
    rootContainerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainerStyle: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      columnGap: 5,
      padding: 10,
    },
  },
};

export default ProductListPage;
