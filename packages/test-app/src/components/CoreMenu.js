import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const MenuItem = ({ item, onAction }) => {
  const {
    icon,
    title,
    action,
    nodes = [],
    fontColor,
    badge,
    badgeColor,
    badgeText,
    badgeTextColor,
    dotIndicator,
    dotIndicatorColor,
    dotSize,
  } = item;
  const innerBlocks = nodes;
  const [expandState, setExpandState] = useState(false);

  useEffect(() => {
    setExpandState(null);
  }, []);

  return (
    <View>
      <Pressable
        style={styles.pressableView}
        onPress={() => {
          if (innerBlocks.length > 0) {
            setExpandState(!expandState);
          } else {
            onAction(action);
          }
        }}>
        <View style={styles.viewRow}>
          {icon ? <Image source={{ uri: icon }} style={styles.image} /> : null}
          <Text
            numberOfLines={1}
            style={[styles.textRow, { color: fontColor || '#061E5E' }]}>
            {title}
          </Text>
          {badge ? (
            <View
              style={[
                styles.badgeTextContainer,
                {
                  backgroundColor: badgeColor,
                },
              ]}>
              <Text
                style={[
                  styles.badgeText,
                  {
                    color: badgeTextColor,
                  },
                ]}>
                {badgeText}
              </Text>
            </View>
          ) : null}
          {dotIndicator ? (
            <View
              style={[
                styles.dotIndicator,
                {
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotIndicatorColor,
                },
              ]}
            />
          ) : null}
        </View>
        {innerBlocks.length > 0 ? (
          <Icon
            name={expandState ? 'arrow-up' : 'arrow-down'}
            size={14}
            color={'rgba(62, 174, 31, 1.0)'}
          />
        ) : null}
      </Pressable>
      {innerBlocks.length > 0 && expandState === true ? (
        <FlatList
          data={innerBlocks}
          renderItem={({ item }) => (
            <MenuItem item={item} onAction={onAction} />
          )}
          keyExtractor={(item) => item.id}
          style={styles.innerContainer}
        />
      ) : null}
    </View>
  );
};

//main component
const CoreMenu = ({ attributes, onAction }) => {
  const menuItems = attributes?.menuItems?.blocks;
  console.log('-------------------------------', menuItems);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem item={item} onAction={onAction} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />
      <View style={styles.footerMenu}>
        <Pressable style={styles.menuItem} onPress={() => {}}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.menuItemIcon}
              source={require('../../assets/icons/profile.png')}
            />
          </View>
          <Text style={styles.menuItemText}>Account</Text>
        </Pressable>
        <Pressable style={styles.menuItem} onPress={() => {}}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.menuItemIcon}
              source={require('../../assets/icons/repeatcircle.png')}
            />
          </View>
          <Text style={styles.menuItemText}>Buy Again</Text>
        </Pressable>
        <Pressable style={styles.menuItem} onPress={() => {}}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.menuItemIcon}
              source={require('../../assets/icons/delivery.png')}
            />
          </View>
          <Text style={styles.menuItemText}>Track Order</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 16,
  },
  container: {},
  pressableView: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 0.7,
    borderColor: '#E7E7E7',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  image: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  textRow: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 5,
    color: '#061E5E',
    flexShrink: 1,
  },
  innerContainer: {
    paddingLeft: 10,
  },
  badgeText: {
    fontSize: 12,
  },
  badgeTextContainer: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    marginLeft: 5,
  },
  dotIndicator: {
    borderRadius: 50,
    marginLeft: 6,
  },
  footerMenu: {
    marginVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuItemIcon: {
    height: 22,
    width: 22,
    marginRight: 10,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3EAE1F',
  },
});

export default CoreMenu;
