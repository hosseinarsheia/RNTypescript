import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';

import R from '../res/R';
import MyText from './MyText';
import { ICON_TYPE } from '../utils/Constants';

export type MyHeaderTitle = {
  title: string;
  children: JSX.Element;
};

function MyHeaderTitle({ title, children }: MyHeaderTitle) {
  return (
    <View style={styles.titleWrapper}>
      {title ? <MyText style={styles.titleText}>{title}</MyText> : children}
      <Icon
        name="caretleft"
        style={styles.iconStyle}
        type={ICON_TYPE.antdesign}
        color={R.colors.regularGreen}
        size={R.dimensions.b20}
      />
    </View>
  );
}

export default MyHeaderTitle;

const styles = StyleSheet.create({
  iconStyle: {
    marginLeft: R.dimensions.h5,
    marginTop: 3,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: R.dimensions.v10,
    flex: 1,
    alignItems: 'flex-start',
  },

  titleText: {
    flex: 1,
  },
});
