import React, { forwardRef, useImperativeHandle } from 'react';
import { View, StyleSheet, TextStyle } from 'react-native';
import { observer, useLocalObservable } from 'mobx-react';

import R from '../res/R';
import { MyText, MyModal, MyButton } from './index';

export type MyErrorModalProps = {
  resultModalTitleStyle: TextStyle;
  resultModalTextStyle: TextStyle;
  onClose: () => void;
};

type LocalObservable = {
  showModal: boolean;
  title: string;
  text: string;
  isError: false;

  setShowModal: (value: LocalObservable['showModal']) => void;
  setTitle: (value: LocalObservable['title']) => void;
  setText: (value: LocalObservable['text']) => void;
  setIsError: (value: LocalObservable['isError']) => void;
};

const MyErrorModal = forwardRef<any, MyErrorModalProps>(
  ({ resultModalTitleStyle, resultModalTextStyle, onClose }, ref) => {
    const localStore = useLocalObservable<LocalObservable>(() => ({
      showModal: false,
      title: '',
      text: '',
      isError: false,

      setShowModal(value) {
        this.showModal = value;
      },
      setTitle(value) {
        this.title = value;
      },
      setText(value) {
        if (value && value.length > 0 && Array.isArray(value))
          this.text = value.join('\n ');
        else this.text = value;
      },
      setIsError(value) {
        this.isError = value;
      },
    }));

    useImperativeHandle(ref, () => ({
      showErrorModal: (title: string, error: string) => {
        localStore.setTitle(title);
        localStore.setText(error);
        localStore.setShowModal(true);
      },
      close: () => {
        localStore.setShowModal(false);
        if (onClose && typeof onClose == 'function') onClose();
      },
    }));

    function buttonPressHandler() {
      localStore.setShowModal(false);
      if (onClose && typeof onClose == 'function') onClose();
    }

    return (
      <View style={styles.container}>
        <MyModal panelStyle={styles.panelStyle} visible={localStore.showModal}>
          <View style={styles.resultModalPanelWrapper}>
            <View style={styles.titleSection}>
              <MyText style={[styles.resultModalTitle, resultModalTitleStyle]}>
                {localStore.title}
              </MyText>
            </View>

            <View style={styles.underLine} />
            <MyText style={[styles.resultModalText, resultModalTextStyle]}>
              {localStore.text}
            </MyText>

            <MyButton
              titleStyle={styles.buttonTitle}
              title={R.strings.ButtonKnow}
              containerStyle={styles.resultModalButton}
              onPress={buttonPressHandler}
            />
          </View>
        </MyModal>
      </View>
    );
  },
);

export default observer(MyErrorModal);

const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: R.fontSizes.fs16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
  },
  panelStyle: {
    width: '90%',
    justifyContent: 'flex-start',
  },

  underLine: {
    ...R.styles.underLine,
    width: '90%',
  },

  resultModalPanelWrapper: {
    ...R.styles.container2,
  },

  resultModalTitle: {
    ...R.styles.h1,
    textAlign: 'center',
    color: R.colors.red,
  },

  resultModalText: {
    ...R.styles.label2,
    textAlign: 'center',
    lineHeight: 30,
    marginTop: R.dimensions.v10,
  },

  resultModalButton: {
    width: '80%',
    marginTop: R.dimensions.v20,
    backgroundColor: R.colors.primaryColor,
    paddingHorizontal: R.dimensions.h10,
  },

  titleSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 30,
    height: 30,
    marginRight: R.dimensions.h5,
    marginBottom: R.dimensions.v5,
  },
});
