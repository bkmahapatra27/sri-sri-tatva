import { fieldsHelper } from '@appmaker-xyz/shopify';

const addMetafields = () => {
  fieldsHelper.addFieldsToCollection({
    fields: {
      appmaker_collection_sub: {
        __aliasFor: 'metafield',
        __args: {
          key: 'sub_collections',
          namespace: 'custom',
        },
        value: true,
        references: {
          __args: {
            first: 250,
          },
          edges: {
            node: {
              __on: {
                __typeName: 'Collection',
                id: true,
                handle: true,
                title: true,
                image: {
                  height: true,
                  width: true,
                  url: true,
                },
              },
            },
          },
        },
      },
      appmaker_collection_template: {
        __aliasFor: 'metafield',
        __args: {
          key: 'appmaker_template',
          namespace: 'custom',
        },
        value: true,
      },
    },
  });
};

export { addMetafields };
