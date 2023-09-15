import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HeaderPin = ({ handleAction }) => {
  const handlePress = () => {
    //https://developer-docs.appmaker.xyz/docs/actions/appmaker-actions
    handleAction({
      action: 'OPEN_INAPP_PAGE',
      pageId: 'home',
    });
  };
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Icon name="map-pin" size={18} color="#4338CA" />
      <Text style={styles.text}>682021</Text>
      <Icon name="chevron-down" size={18} color="#212121" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f2f5',
    borderRadius: 20,
    padding: 8,
  },
  text: {
    color: '#000',
    marginLeft: 2,
  },
});

export default HeaderPin;
