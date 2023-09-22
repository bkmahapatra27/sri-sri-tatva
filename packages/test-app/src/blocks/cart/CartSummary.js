import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCart } from '@appmaker-xyz/shopify';

const CartSummary = (props) => {
  const { cartTotalPrice, cartDiscountSavings, cartSubTotalAmount } =
    useCart(props);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Price Details</Text>
      <View style={styles.lineContainer}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>Rs. {cartSubTotalAmount}</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.text}>Discount</Text>
        <Text style={styles.text}>-Rs. {cartDiscountSavings}</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.boldText}>Total Amount</Text>
        <Text style={styles.boldText}>Rs. {cartTotalPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#2C272D',
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#2C272D',
    marginVertical: 8,
  },
  boldText: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#3EAE1F',
    marginVertical: 8,
  },
});

export default CartSummary;
