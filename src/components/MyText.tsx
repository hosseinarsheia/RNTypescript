import React, { Component } from 'react';
import { StyleProp, Text, TextProps, TextStyle, TextComponent } from 'react-native';
import { observer } from 'mobx-react';

export type Props = {
  font?: 'Regular' | 'Bold';
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
  children: JSX.Element | string;
} & TextProps;

const MyText = ({
  font = 'Regular',
  size = 15,
  color = 'gray',
  style,
  children,
  ...otherProps
}: Props) => {
  const fontFamily = font === 'Regular' ? 'bold' : font === 'Bold' ? 'bold' : 'bold';

  return (
    <Text
      style={[{ fontFamily, fontSize: size, color }, style]}
      allowFontScaling={false}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default observer(MyText);
