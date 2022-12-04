import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Modal,
  TouchableWithoutFeedback,
  ModalBaseProps,
} from 'react-native';
import { observer, useLocalObservable } from 'mobx-react';
import { Icon } from '@rneui/themed';

import R from '../res/R';
import MyText from './MyText';
import { ICON_TYPE } from '../utils/Constants';

export type AlertProps = {
  animationType?: ModalBaseProps['animationType'];
  closeOnTouchOutSide?: boolean;
};

export type LocalObservablProps = {
  visible: boolean;
  message: string;
  secondMessage: string;
  title: string;
  icon: 'error' | 'success';
  buttons: [] | { text: string; onPress: () => void }[];

  setVisible: (value: LocalObservablProps['visible']) => void;
  setMessage: (value: LocalObservablProps['message']) => void;
  setSecondMessage: (value: LocalObservablProps['secondMessage']) => void;
  setTitle: (value: LocalObservablProps['title']) => void;
  setIcon: (value: LocalObservablProps['icon']) => void;
  setButtons: (value: LocalObservablProps['buttons']) => void;

  setAllValues: (
    title: LocalObservablProps['title'],
    message: LocalObservablProps['message'],
    Icon: 'success',
    buttons: LocalObservablProps['buttons'],

    secondMessage: LocalObservablProps['secondMessage'],
  ) => void;
};

const MyAlert = forwardRef<any, AlertProps>(
  ({ animationType, closeOnTouchOutSide = false }, ref) => {
    const localStore = useLocalObservable<LocalObservablProps>(() => ({
      visible: false,
      message: '',
      secondMessage: '',
      title: '',
      icon: 'success',
      buttons: [],

      setVisible(value: LocalObservablProps['visible']) {
        this.visible = value;
      },
      setMessage(value: LocalObservablProps['message']) {
        this.message = value;
      },
      setSecondMessage(value: LocalObservablProps['secondMessage']) {
        this.secondMessage = value;
      },
      setTitle(value: LocalObservablProps['title']) {
        this.title = value;
      },
      setIcon(value: LocalObservablProps['icon']) {
        this.icon = value;
      },
      setButtons(value: LocalObservablProps['buttons']) {
        this.buttons = value;
      },

      setAllValues(
        title: LocalObservablProps['title'],
        message: LocalObservablProps['message'],
        Icon: LocalObservablProps['icon'] = 'success',
        buttons: LocalObservablProps['buttons'],

        secondMessage: LocalObservablProps['secondMessage'],
      ) {
        this.message = message;
        this.secondMessage = secondMessage;
        this.title = title;
        this.icon = Icon;
        this.buttons = buttons;
        this.visible = true;
      },
    }));

    const styles = useMemo(() => createdStyle(localStore.icon), [localStore.icon]);

    useImperativeHandle(ref, () => ({
      showAlert: (
        title: LocalObservablProps['title'],
        message: LocalObservablProps['message'],
        Icon: LocalObservablProps['icon'] = 'success',
        buttons: LocalObservablProps['buttons'] = [],
        secondMessage: LocalObservablProps['secondMessage'],
      ) => {
        localStore.setAllValues(title, message, Icon, buttons, secondMessage);
      },
    }));

    function onRequestClose() {
      localStore.setVisible(false);
    }

    function renderButtons() {
      if (localStore.buttons && localStore.buttons.length > 0) {
        return localStore.buttons.map((b, i) => {
          return (
            <TouchableHighlight
              key={`${i}`}
              underlayColor={R.colors.buttonGrayUnderlay}
              style={[
                styles.buttonWrapper,
                {
                  backgroundColor: i == 0 ? R.colors.primaryColor : R.colors.darkRed,
                },
              ]}
              onPress={() => {
                if (b.onPress && typeof b.onPress == 'function') b.onPress();
                localStore.setVisible(false);
              }}>
              <MyText style={styles.buttonTitle}>{b.text}</MyText>
            </TouchableHighlight>
          );
        });
      } else {
        return (
          <TouchableHighlight
            style={styles.okButtonWrapper}
            underlayColor={R.colors.buttonGrayUnderlay}
            onPress={onRequestClose}>
            <MyText style={styles.okText}>{R.strings.ok}</MyText>
          </TouchableHighlight>
        );
      }
    }

    return (
      <Modal
        animationType={animationType}
        transparent={true}
        visible={localStore.visible}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (closeOnTouchOutSide) localStore.setVisible(false);
          }}>
          <View style={styles.upperWrapper}>
            <TouchableWithoutFeedback>
              <View style={styles.innerWrapper}>
                <View style={styles.headerWrapper}>
                  <MyText style={styles.titleText}>{localStore.title}</MyText>

                  <Icon
                    name="warning"
                    type={ICON_TYPE.ionicon}
                    color={R.colors.regularDoc}
                    style={styles.headerIcon}
                  />
                </View>

                <View style={styles.dividerWrapper}>
                  <View style={styles.divider} />
                </View>

                <View style={styles.messageWrapper}>
                  <MyText style={styles.message}> {localStore.message} </MyText>
                </View>

                {localStore.secondMessage ? (
                  <View style={[styles.messageWrapper, { padding: 0 }]}>
                    <MyText style={styles.secondMessage}>
                      {localStore.secondMessage}
                    </MyText>
                  </View>
                ) : null}

                <View style={styles.buttonsWrapper}>{renderButtons()}</View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  },
);

export default observer(MyAlert);

export const createdStyle = (icon: LocalObservablProps['icon']) => {
  return StyleSheet.create({
    headerIcon: {
      marginLeft: R.dimensions.h10,
      paddingBottom: R.dimensions.v5,
    },
    headerWrapper: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingVertical: R.dimensions.v5,
    },
    secondMessage: {
      // ...R.styles.h4,
      textAlign: 'center',
      // fontSize: R.fontSizes.h6,
      fontFamily: R.fonts.IRANSansMobile,
      lineHeight: R.fontSizes.lineHeight.big,
    },

    buttonWrapper: {
      flex: 1,
      alignItems: 'stretch',
      margin: R.dimensions.b10,
      borderRadius: R.dimensions.radius5,
      paddingVertical: R.dimensions.v10,
    },

    buttonTitle: {
      ...R.styles.label3,
      fontSize: R.fontSizes.fs16,
      textAlign: 'center',
      color: R.colors.white,
    },

    okButtonWrapper: {
      flex: 1,
      alignItems: 'stretch',
      paddingVertical: R.dimensions.v10,
      backgroundColor: R.colors.primaryColor,
      margin: 5,
      borderRadius: R.dimensions.radius5,
    },

    okText: {
      ...R.styles.label3,
      textAlign: 'center',
      color: R.colors.white,
    },

    upperWrapper: {
      flex: 1,
      backgroundColor: R.colors.modalBack,
      justifyContent: 'center',
      alignItems: 'center',
    },

    innerWrapper: {
      minWidth: 200,
      maxWidth: '90%',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: R.dimensions.radius5,
    },

    titleText: {
      ...R.styles.h2,
      textAlign: 'center',
      color: icon === 'error' ? R.colors.red : R.colors.lightBlueGreen,
    },

    dividerWrapper: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },

    divider: {
      width: '90%',
      height: 2,
      backgroundColor: R.colors.separator,
    },

    messageWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: R.dimensions.b10,
    },

    message: {
      // ...R.styles.h4,
      textAlign: 'center',
      lineHeight: R.fontSizes.lineHeight.xBig,
    },

    buttonsWrapper: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  });
};
