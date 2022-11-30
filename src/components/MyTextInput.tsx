import React, { forwardRef } from 'react';
import { View, StyleSheet, TextInputComponent, ViewStyle, TextStyle } from 'react-native';
import { observer } from 'mobx-react';
import { Input, InputProps } from '@rneui/themed';
// import { Input } from '@rneui/base';
import PropTypes from 'prop-types';

import R from '../res/R';
import MyText from './MyText';

export type Mine = {
  required: boolean;
  containerStyle: ViewStyle;
  inputContainerStyle: ViewStyle;
  inputOutterContainerStyle: ViewStyle;
  style: TextStyle;
  leftIconContainerStyle: ViewStyle;
  errorMessage: string;
  inputWrapper: ViewStyle;
  label: string;
  textAlign: 'right' | 'center' | 'left';
  value: string;
  showRial: boolean;
  leftIcon: JSX.Element;
  editable: boolean;
} & InputProps;

export type Props = {
  props: Mine;
  ref: React.ForwardedRef<TextInputComponent>;
};

const MyTextInput = forwardRef(
  (
    {
      required,
      containerStyle,
      inputContainerStyle,
      inputOutterContainerStyle,
      style,
      leftIconContainerStyle,
      errorMessage,
      inputWrapper,
      label,
      textAlign = 'right',
      value,
      showRial = false,
      leftIcon,
      editable = true,
      ...otherProps
    },
    ref,
  ): Props => {
    return (
      <View
        style={[
          styles.inputWrapper,
          { backgroundColor: editable ? R.colors.white : R.colors.unEditable },
          inputWrapper,
        ]}>
        <Input
          editable={editable}
          ref={ref}
          value={value?.toString()}
          containerStyle={[styles.inputOutterContainerStyle, inputOutterContainerStyle]}
          style={[styles.inputStyle, style, { textAlign: textAlign }]}
          inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
          leftIconContainerStyle={[styles.leftIconStyle, leftIconContainerStyle]}
          leftIcon={leftIcon ? leftIcon : showRial ? <MyText>ریال</MyText> : null}
          renderErrorMessage={false}
          inputStyle={{
            minHeight: 30,
            backgroundColor: editable ? R.colors.white : R.colors.unEditable,
          }}
          errorStyle={{
            marginVertical: errorMessage ? R.dimensions.v5 : 0,
            fontSize: errorMessage ? R.fontSizes.fs12 : 0,
            fontFamily: R.fonts.Vazir,
          }}
          {...otherProps}
        />

        {label && (
          <MyText
            style={[
              styles.labelStyle,
              {
                backgroundColor: editable ? R.colors.white : R.colors.unEditable,
              },
            ]}>
            {label}
            <MyText color={required ? R.colors.regularRed : R.colors.textColor}>
              {required ? ' *' : null}
            </MyText>
          </MyText>
        )}
      </View>
    );
  },
);

export default MyTextInput;

const styles = StyleSheet.create({
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    paddingHorizontal: 0,
    marginTop: R.fontSizes.fs20,
    backgroundColor: R.colors.white,
  },
  inputStyle: {
    paddingVertical: 10,
    paddingBottom: 0,
    fontFamily: R.fonts.IRANSansMobile,
    fontWeight: 'normal',
    minHeight: 40,
    fontSize: R.fontSizes.fs14,
    marginBottom: 5,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },

  labelStyle: {
    position: 'absolute',
    top: -R.fontSizes.fs15 + 3,
    right: 10,
    backgroundColor: R.colors.white,
    paddingHorizontal: R.dimensions.h5,
    color: 'gray',
    fontSize: R.fontSizes.fs12,
    borderRadius: R.dimensions.radius3,
  },

  inputOutterContainerStyle: {
    paddingHorizontal: R.dimensions.h10,
    borderRadius: R.dimensions.radius3,
    borderColor: R.colors.textInputBorder,
    borderWidth: 1,
  },

  leftIconStyle: {
    paddingRight: R.dimensions.h10,
  },
});

MyTextInput.propTypes = {
  required: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  inputContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  inputOutterContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  leftIconContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  errorMessage: PropTypes.string,
  inputWrapper: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.string,
  textAlign: PropTypes.oneOf(['right', 'center', 'left']),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showRial: PropTypes.bool,
  leftIcon: PropTypes.node,
  editable: PropTypes.bool,
};
