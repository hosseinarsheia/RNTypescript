import React from 'react';
import { ImagePickerIOS, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { ButtonGroup, ButtonGroupProps } from '@rneui/themed';

import R from '../res/R';

const MyButtonGroup = (props: ButtonGroupProps) => {
  return (
    <ButtonGroup
      containerStyle={styles.containerStyle}
      selectedButtonStyle={styles.selectedButtonStyle}
      textStyle={styles.textStyle}
      selectedTextStyle={styles.selectedTextStyle}
      innerBorderStyle={styles.innerBorderStyle}
      {...props}
    />
  );
};

export default observer(MyButtonGroup);

const styles = StyleSheet.create({
  selectedButtonStyle: {
    backgroundColor: R.colors.regularGreen,
  },

  selectedTextStyle: {
    color: 'white',
  },

  innerBorderStyle: {
    color: R.colors.regularGree,
  },

  containerStyle: {
    marginVertical: R.dimensions.v20,
    borderColor: R.colors.regularGreen,
    borderRadius: R.dimensions.radius5,
    marginHorizontal: 0,
  },

  textStyle: {
    fontFamily: R.fonts.IRANSansMobile,
    fontSize: R.fontSizes.fs12,
    color: R.colors.regularGreen,
  },
});
