import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const OfferSection = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/offerImage.png')}
      />
      <Text style={styles.mainHeader}>SAVE UPTO 70% ON TOP CATEGORIES</Text>
      <Text style={styles.secondaryHeader}>26th August to 1 Sept</Text>
      <Text style={styles.couponText}>
        Use CODE <Text style={styles.couponTextBold}>TOP06</Text>
      </Text>

      <View style={styles.ProductContainer}>
        <View style={styles.ProductRow}>
          <Pressable>
            <Image
              style={styles.ProductItem}
              source={require('../../assets/images/products/Group-272.png')}
            />
          </Pressable>

          <Image
            style={styles.ProductItem}
            source={require('../../assets/images/products/Group-272.png')}
          />

          <Image
            style={styles.ProductItem}
            source={require('../../assets/images/products/Group-272.png')}
          />
        </View>
        <View style={styles.ProductRow}>
          <Image
            style={styles.ProductItem}
            source={require('../../assets/images/products/Group-275.png')}
          />
          <Image
            style={styles.ProductItem}
            source={require('../../assets/images/products/Group-276.png')}
          />
          <Image
            style={styles.ProductItem}
            source={require('../../assets/images/products/Group-277.png')}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04DC406E',
  },
  image: {
    width: 300, // Adjust the width as needed
    height: 250, // Adjust the height as needed
  },
  mainHeader: {
    width: '70%',
    textAlign: 'center',
    fontSize: 30,
    color: '#061E5E',
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10,
  },
  secondaryHeader: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.43)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    margin: 10,
  },
  couponText: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    textAlign: 'center',
    color: '#061E5E',
    margin: 10,
  },
  couponTextBold: {
    fontWeight: 'bold',
  },
  ProductContainer: {
    flex: 1,
    // flexDirection: 'row',
  },
  ProductRow: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  ProductItem: {
    height: 130,
    width: 110,
    margin: 5,
  },
});
export default OfferSection;
