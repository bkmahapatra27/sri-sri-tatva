import React, { useState } from 'react';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import { ProductList } from '@appmaker-xyz/shopify';

// Sample custom collection page.
const CustomCollection = (props) => {
  const { blockData, BlockItemRender } = props;
  const [collectionId, setCollectionId] = useState(
    blockData?.collection?.id || '',
  );
  const [activeTab, setActiveTab] = useState(null);

  const Switcher = () => {
    const collections =
      blockData?.collection?.appmaker_collection_sub?.references?.edges;
    return collections ? (
      collections?.map((item, index) => (
        <Pressable
          key={index}
          style={[
            styles.menuItem,
            index === activeTab ? styles.menuActive : '',
          ]}
          onPress={() => {
            setCollectionId(item?.node?.id);
            setActiveTab(index);
          }}>
          <View style={styles.menuImageContainer}>
            <Image
              style={styles.menuImage}
              source={{ uri: item?.node?.image.url }}
            />
          </View>
          <Text style={styles.menuTitle}>{item?.node?.title}</Text>
        </Pressable>
      ))
    ) : (
      <Text>No collection</Text>
    );
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={styles.menuContainer}>{Switcher()}</View>
      <ProductList
        collectionQuery={{
          id: collectionId,
        }}
        BlockItemRender={BlockItemRender}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#E6F0FA',
    width: 80,
  },
  menuItem: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  menuActive: {
    backgroundColor: '#D3DFFF',
  },
  menuImageContainer: {
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  menuImage: {
    width: '100%',
    height: 70,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#000000',
    marginVertical: 5,
  },
});
export default CustomCollection;
