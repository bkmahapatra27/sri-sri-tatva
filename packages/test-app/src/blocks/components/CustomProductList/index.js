import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { ProductList } from '@appmaker-xyz/shopify';

// Sample custom collection page.
const CustomCollection = (props) => {
  const { blockData, BlockItemRender } = props;
  const [collectionId, setCollectionId] = useState(
    blockData?.collection?.id || '',
  );

  const Switcher = () => {
    const collections =
      blockData?.collection?.appmaker_collection_sub?.references?.edges;
    return collections?.map((item) => (
      <Pressable
        style={{
          shadow: 20,
          padding: 20,
        }}
        onPress={() => {
          setCollectionId(item?.node?.id);
        }}>
        <Text>{item?.node?.title}</Text>
      </Pressable>
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        {Switcher()}
      </View>
      <ProductList
        collectionQuery={{
          id: collectionId,
        }}
        BlockItemRender={BlockItemRender}
      />
    </View>
  );
};

export default CustomCollection;
