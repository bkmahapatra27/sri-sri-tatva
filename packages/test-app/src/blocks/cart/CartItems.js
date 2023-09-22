import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useCartProduct } from '@appmaker-xyz/shopify';

const CartItems = (props) => {
  const {
    title,
    imageUri,
    regularPrice,
    salePrice,
    quantity,
    increaseQuantity,
    decreaseQuantity,
    quantityLoading,
    openProduct,
    canUpdateQuantity,
  } = useCartProduct(props);

  return (
    <Pressable onPress={openProduct}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.itemImage} source={{ uri: imageUri }} />
          </View>

          <View style={styles.sectionTitleContainer}>
            <Text style={styles.title}>
              {title.split(',')[0].split('|')[0]}
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <View style={styles.cartBtn}>
              <Pressable onPress={() => decreaseQuantity()}>
                <Text style={styles.counter}>-</Text>
              </Pressable>
              <Text style={styles.counter}>{quantity}</Text>
              <Pressable onPress={() => increaseQuantity()}>
                <Text style={styles.counter}>+</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.salePrice}>{salePrice}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
    marginHorizontal: 14,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  sectionContainer: {
    flex: 1,
  },
  sectionTitleContainer: {
    flex: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#000000',
    marginHorizontal: 10,
  },
  imageContainer: {
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'rgba(166, 166, 166, 1.0)',
    padding: 5,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  cartBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgba(6, 30, 94, 1.0)',
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // margin: 3,
  },
  counter: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#061E5E',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  salePrice: {
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#000000',
    textAlign: 'right',
  },
});
export default CartItems;
