import React from 'react';
import { useProductListItem } from '@appmaker-xyz/shopify';
import { Text, View, Image, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

const ProductGridItem = (props) => {
  const {
    title,
    salePrice,
    imageUrl,
    addToCart,
    onAddToCart,
    openProduct,
    gridViewListing,
  } = useProductListItem(props);

  console.log('---props', props);

  const containerStyle = [styles.container];
  if (gridViewListing) {
    containerStyle.push({
      width: '50%',
    });
  } else {
    containerStyle.push({
      width: 180,
    });
  }

  return (
    <Pressable onPress={openProduct} style={containerStyle}>
      <View style={styles.viewContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        {/* <Text style={styles.title}>{title.split(',')[0].split('|')[0]}</Text> */}
        <Text style={styles.title}>{title.slice(0, 40)}</Text>
        <Text style={styles.quantity}>{title.split(',')[1]}</Text>
        <View style={styles.btnContainer}>
          <Text style={styles.salePrice}>{salePrice}</Text>
          <Pressable style={styles.btn} onPress={addToCart}>
            <Text style={styles.btnText}>ADD</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.giftSmileContainer}>
        <Image
          style={styles.infoIcon}
          source={require('../../assets/icons/infocircle.png')}
        />
        <Text style={styles.infoText}>Gift A Smile</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // maxWidth: 200,
    // height: '100%',
    // justifyContent: 'flex-start',
    // alignContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  viewContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignContent: 'stretch',
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#1E1A1A',
    paddingVertical: 10,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#847D7D',
  },
  imageContainer: {
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'rgba(166, 166, 166, 1.0)',
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 140,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: 60,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#061E5E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 12,
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
  giftSmileContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  infoText: {
    color: '#5C5656',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    textDecorationLine: 'underline',
  },
  infoIcon: {
    marginRight: 5,
    width: 12,
    height: 12,
  },
});

export default ProductGridItem;
