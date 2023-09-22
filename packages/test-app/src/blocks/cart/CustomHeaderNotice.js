import React from 'react';
import { Text, View } from 'react-native';
import { useCart } from '@appmaker-xyz/shopify';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

const CustomHeaderNotice = (props) => {
  const { cartTotalPrice } = useCart(props);

  const cartOffers = [
    { priceAbove: 299, offerText: 'Free Shipping' },
    { priceAbove: 1299, offerText: '10% off' },
    { priceAbove: 2999, offerText: '30% off' },
  ];

  const activeStatuBar = (price) => {
    if (cartTotalPrice > price) {
      return (
        <View style={styles.activeBar}>
          <Image
            style={styles.activeBarIcon}
            source={require('../../../assets/icons/cartCheck.png')}
          />
        </View>
      );
    }
    return <View style={styles.statusBar}></View>;
  };

  return (
    <View style={styles.contianer}>
      {cartOffers.map((item, index) => {
        return (
          <View style={styles.sectionContianer}>
            <View style={styles.textContianer}>
              <Text style={styles.priceAbove}>Above {item.priceAbove}</Text>
              <Text style={styles.offerText}>Above {item.offerText}</Text>
            </View>
            <View style={styles.activeContianer}>
              {activeStatuBar(item.priceAbove)}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: '#E9FEE7',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginHorizontal: 18,
  },
  sectionContianer: {
    flex: 1,
  },
  textContianer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceAbove: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#000000',
  },
  offerText: {
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#1E1A1A',
  },
  activeContianer: {
    paddingVertical: 20,
  },
  statusBar: {
    width: '100%',
    height: 5,
    backgroundColor: '#E7E7E7',
  },
  activeBar: {
    width: '100%',
    height: 5,
    backgroundColor: '#3EAE1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeBarIcon: {
    width: 18,
    height: 18,
  },
});

export default CustomHeaderNotice;
