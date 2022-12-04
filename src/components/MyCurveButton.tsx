import React, { useMemo } from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { observer } from 'mobx-react';
import { Icon, IconProps } from '@rneui/themed';

import R from '../res/R';
import MyText from './MyText';
import { ICON_TYPE } from '../utils/Constants';

export type MyCurveButtonProps = {
  title: string;
  onPress: () => {};
  color: keyof typeof R.colors | string;
  iconName: string;
  iconType: IconProps['type'];
  size: number;
  containerStyle: ViewStyle;
  titleWrapper: ViewStyle;
};

const MyCurveButton = ({
  title,
  onPress,
  color = R.colors.regularGreen,
  iconName = 'twitter',
  iconType = ICON_TYPE.fontAwesome5,
  size = R.dimensions.b20,
  containerStyle,
  titleWrapper,
}: MyCurveButtonProps) => {
  const styles = useMemo(() => createdStyle(color, size), [color, size]);
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={styles.iconBackground} />
        <Icon
          containerStyle={{ position: 'absolute' }}
          name={iconName}
          type={iconType}
          color={R.colors.white}
          size={size}
        />
      </View>

      <View style={[styles.titleWrapper, titleWrapper]}>
        <MyText size={R.fontSizes.fs14} font="Bold" color={color}>
          {title}
        </MyText>
      </View>
    </TouchableOpacity>
  );
};

export default observer(MyCurveButton);

export const createdStyle = (
  color: MyCurveButtonProps['color'],
  size: MyCurveButtonProps['size'],
) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: R.dimensions.v10,
    },

    iconContainer: {
      borderRadius: 500,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
      width: size * 2,
      height: size * 2,
    },

    iconBackground: {
      borderRadius: 500,
      borderWidth: 1,
      borderColor: R.colors.white,
      width: size * 2 - 5,
      height: size * 2 - 5,
    },

    titleWrapper: {
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopRightRadius: 500,
      paddingHorizontal: R.dimensions.h40,
      alignSelf: 'stretch',
      justifyContent: 'center',
      borderColor: color,
      transform: [{ translateX: -size }],
    },
  });
};
