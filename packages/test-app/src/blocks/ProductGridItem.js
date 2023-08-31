import React from 'react';
import { useProductListItem } from '@appmaker-xyz/shopify';
import { Text, View, Image, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

const ProductGridItem = (props) => {
  const {
    title,
    salePrice,
    imageUrl,
    onAddToCart,
    openProduct,
    regularPrice,
    average_rating,
    salePercentage,
  } = useProductListItem(props);

  return (
    <Pressable onPress={openProduct}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <Text style={styles.title}>{title.split(',')[0]}</Text>
        <Text style={styles.quantity}>{title.split(',')[1]}</Text>
        <View style={styles.btnContainer}>
          <Text style={styles.salePrice}>{salePrice}</Text>
          <Pressable style={styles.btn} onPress={onAddToCart}>
            <Text style={styles.btnText}>ADD</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
    padding: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#1E1A1A',
  },
  imageContainer: {
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'rgba(166, 166, 166, 1.0)',
  },
  image: {
    width: 'auto',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    width: 70,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#061E5E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  salePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#1E1A1A',
  },
});

export default ProductGridItem;
