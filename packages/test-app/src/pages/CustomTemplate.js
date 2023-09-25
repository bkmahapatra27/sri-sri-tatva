const pagesData = {
  title: 'Product list',
  attributes: {
    insideSafeAreaView: true,
    renderType: 'normal',
    rootContainerStyle: {
      flex: 1,
    },
    contentContainerStyle: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 4,
      paddingTop: 4,
    },
  },
  blocks: [
    {
      attributes: {},
      name: 'sri-sri-tatva/custom-product-list',
      innerBlocks: [],
      clientId: 'product-list',
      isValid: true,
    },
  ],
  stickyFooter: {
    blocks: [
      {
        name: 'shopify/collection-sort-filter',
        attributes: {
          isSearch: '{{checkIfTrueFalse(currentAction.params.showSearch)}}',
        },
      },
      { name: 'sri-sri-tatva/PLPFooter' },
    ],
  },
  _id: 'productList',
  uid: 'odRhv94hf4S52SysvvNoxPyRx682',
  dataSource: {},
};
export default pagesData;
