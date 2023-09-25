import React from 'react';
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { useCart } from '@appmaker-xyz/shopify';

const PLPFooterMenu = (props) => {
  const { totalQuantity, cartTotalPrice } = useCart(props);

  const openCart = () => {
    props.onAction({
      action: 'OPEN_CART',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer1}>
        <Text
          style={
            styles.btnText
          }>{`${totalQuantity} Items | ${cartTotalPrice}`}</Text>
      </View>
      <Pressable style={styles.btnContainer2} onPress={openCart}>
        <Text style={styles.btnText}>VIEW CART</Text>
        <Image
          style={styles.btnIcon}
          source={require('../../assets/icons/footerCart.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    margin: 0,
  },
  btnContainer1: {
    flex: 3,
    backgroundColor: '#061E5E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer2: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#3EAE1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  btnIcon: {
    height: 24,
    width: 24,
    margin: 5,
  },
});

export default PLPFooterMenu;
