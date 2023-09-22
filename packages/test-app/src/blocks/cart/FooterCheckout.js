import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCart } from '@appmaker-xyz/shopify';
import { Pressable } from 'react-native';

const FooterCheckout = (props) => {
  const { cartTotalPrice, openCheckout } = useCart(props);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textSmall}>Total</Text>
        <Text style={styles.textLarge}>RS. {cartTotalPrice}</Text>
      </View>
      <Pressable style={styles.btnContainer} onPress={openCheckout}>
        <Text style={styles.btnText}>CHECKOUT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(231, 231, 231, 1.0)',
  },
  textContainer: { flex: 1, justifyContent: 'center' },
  textSmall: {
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#061E5E',
  },
  textLarge: {
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#061E5E',
  },
  btnContainer: {
    flex: 1.5,
    borderRadius: 10,
    backgroundColor: '#061E5E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default FooterCheckout;
