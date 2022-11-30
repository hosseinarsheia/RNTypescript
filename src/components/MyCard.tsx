import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  observable,
  makeObservable,
  makeAutoObservable,
  runInAction,
  action,
} from 'mobx';
import { inject, observer, useLocalObservable } from 'mobx-react';
import R from '../res/R';
import MyText from './MyText';

import { Icon, IconProps } from '@rneui/themed';
import { IconType } from '@rneui/base';

export type Props = {
  iconName?: string;
  iconSize?: number;
  iconType?: IconType;
  iconColor?: IconProps['color'];
  title?: string;
  children: JSX.Element;
  containerStyle?: ViewStyle;
  LeftComponent?: TextStyle;
  iconStyle?: IconProps['iconStyle'];
};

const MyCard = ({
  iconName,
  iconSize = R.dimensions.b20,
  iconType = 'antdesign',
  iconColor = R.colors.white,
  title,
  children,
  containerStyle,
  LeftComponent,
  iconStyle,
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={{
          ...styles.topRowWrapper,
          paddingRight: LeftComponent ? R.dimensions.h10 : 0,
        }}>
        <>
          {title && (
            <View style={[styles.headerTitleWrapper]}>
              <View style={styles.skewedView} />
              {iconName && (
                <Icon
                  containerStyle={styles.iconContainer}
                  name={iconName}
                  size={iconSize}
                  type={iconType}
                  color={iconColor}
                  iconStyle={iconStyle}
                />
              )}

              <MyText
                color={R.colors.white}
                style={[styles.headerTitle, { paddingRight: !iconName ? 15 : 0 }]}>
                {title}
              </MyText>
            </View>
          )}

          {LeftComponent}
        </>
      </View>
      <View style={{ paddingHorizontal: 10 }}>{children}</View>
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: R.dimensions.v10,
    borderWidth: 1,
    borderColor: R.colors.lightBorderColor,
    borderRadius: R.dimensions.radius10,
    borderTopRightRadius: 0,
    overflow: 'hidden',
    paddingBottom: R.dimensions.v10,
  },

  skewedView: {
    position: 'absolute',
    width: '100%',
    height: '200%',
    backgroundColor: '#318F9C',
    bottom: 0,
    transform: [{ translateX: -2 }, { rotateZ: '5deg' }],
  },

  topRowWrapper: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitleWrapper: {
    flexDirection: 'row-reverse',
    alignItems: 'stretch',
    marginBottom: R.dimensions.v15,
    backgroundColor: R.colors.darkGray,
  },

  headerTitle: {
    paddingLeft: R.dimensions.h25,
    borderBottomLeftRadius: R.dimensions.radius10,
    paddingVertical: 5,
  },

  iconContainer: {
    justifyContent: 'center',
    paddingRight: R.dimensions.h15,
    paddingLeft: R.dimensions.h10,
  },
});
