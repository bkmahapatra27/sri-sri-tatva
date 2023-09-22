import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useDiscount } from '@appmaker-xyz/shopify';

const CouponApply = (props) => {
  const [couponCode, onChangeCoupon] = React.useState('');
  const { onApplyCoupon } = useDiscount(props);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCoupon}
        value={couponCode}
        placeholder="Enter Coupon Code"
      />
      <Pressable
        style={styles.btnContainer}
        onPress={() => onApplyCoupon(couponCode)}>
        <Text style={styles.btnText}>APPLY</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 4,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(231, 231, 231, 1.0)',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 10,
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

export default CouponApply;
