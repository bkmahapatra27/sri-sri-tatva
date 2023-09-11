const DrawerMenu = {
  parentID: 'mainmenu',
  id: 'mainmenu',
  blocks: [
    // add your custom blocks here if any
    {
      name: 'appmaker/core-menu',
      clientId: 'drawer-menu',
      // Note: core-menu block will provide the menu items added in the appmaker dashboard
    },
  ],
  stickyFooter: [
    // add your custom blocks here if any
  ],
  attributes: {},
};

export default DrawerMenu;
