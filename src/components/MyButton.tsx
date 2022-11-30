import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import R from '../res/R';
import MyText from './MyText';

export type Props = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  backgroundColor?: keyof typeof R.colors | string;
};

function MyButton({
  title,
  containerStyle,
  titleStyle,
  onPress,
  backgroundColor = R.colors.darkGray,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        { borderColor: backgroundColor, backgroundColor: backgroundColor },
        containerStyle,
      ]}>
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <MyText style={[styles.titleStyle, titleStyle]}>{title}</MyText>
      </TouchableOpacity>
    </View>
  );
}

export default MyButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: R.dimensions.radius3,
    marginVertical: R.dimensions.v10,
    borderWidth: 1,
    paddingHorizontal: 20,
    minWidth: 100,
  },
  touchable: {
    width: '100%',
    alignItems: 'stretch',
  },
  titleStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: R.colors.white,
    paddingVertical: R.dimensions.v3,
  },
});
